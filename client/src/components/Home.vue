<template>
  <div>
    <div
      class="
        relative
        min-h-screen
        font-mono
        bg-gradient-to-r
        from-blue-500
        to-pink-500
        flex flex-col
        justify-center
        relative
        overflow-hidden
        bg-top-left bg-origin-border bg-clip-border bg-fixed bg-center bg-cover
      "
      :style="`
      background-image: linear-gradient(${spotify.gradient}), url('${spotify.image}');
      `"
    >
      <div
        class="
          fixed
          right-5
          bottom-5
          opacity-20
          text-right text-white
          tracking-tighter
        "
        v-if="spotify.artistName && action.main === `OK`"
      >
        <div class="artist-name font-sans text-9xl font-black">
          {{ spotify.artistName }}
        </div>
        <div class="artist-name font-sans font-bold">
          {{ spotify.songTitle }}
        </div>
      </div>
      <div
        class="
          pt-5
          top-5
          pr-3
          pl-3
          pb-5
          max-w-md
          rounded-none
          sm:px-10
          mx-auto
          text-white
          z-20
          xl:fixed
          font-mono
          sm:max-w-lg
          
        "
      >
        <div v-if="action.main === 'OK'">
          <div
            class="
              audioStats
              bg-black bg-opacity-20
              grid grid-cols-1
              text-right
              pr-2
              pb-2
            "
          >
            <div class="stats-artist mb-3 mt-3 pr-5 pl-5 xl:pr-1">
              <div class="top-date" v-if="spotify.artistName">
                <span class="font-extrabold text-xl">{{
                  spotify.artistName
                }}</span
                ><br />
                <span class="text-sm">{{ spotify.songTitle }}</span>
                <br />
                <span class="text-sm">{{ spotify.albumName }}</span>
              </div>
            </div>

            <Positiveness
              :audio-features="spotify.audioFeatures"
              main-text="Positiveness"
              key-positive="valence"
            />
            <Positiveness
              :audio-features="spotify.audioFeatures"
              main-text="Danceability"
              key-positive="danceability"
            />
            <Positiveness
              :audio-features="spotify.audioFeatures"
              main-text="Energy"
              key-positive="energy"
            />

            <div class="peri-total pb-3">
              <div
                class="`positiveness positiveness-total pt-1 pb-4`"
                v-if="spotify.audioFeatures"
              >
                Total: {{ spotify.periTotal.percentage }}% -
                <span
                  class="pl-3 pr-3 text-white mr-5"
                  :style="`background-color:${spotify.periTotal.peri.color}`"
                >
                  {{ spotify.periTotal.peri.title }}</span
                >
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            grid grid-flow-row-dense grid-cols-4 grid-rows-1
            bg-black bg-opacity-30
          "
          v-if="current.data.user"
        >
          <div class="" v-if="_.get(current, 'data.user.data.images[0]')">
            <div class="md:shrink-0">
              <img
                class="pl-0"
                style="width: 90px"
                :src="current.data.user.data.images[0].url"
                :alt="current.data.user.data.display_name"
              />
            </div>
          </div>

          <div class="col-span-3">
            <div class="pt-2 pl-5">
              <div
                class="
                  uppercase
                  tracking-wide
                  text-sm text-white
                  font-normal
                  text-left
                "
              >
                {{ current.data.user.data.display_name }}
                <div>
                  <a
                    href="javascript:void(0)"
                    class="mr-2 text-xs underline"
                    title="Logout"
                    v-on:click="logout"
                    >Logout</a
                  >
                </div>

                <div>
                  <a
                    href="#modal-history"
                    class="mr-2 text-xs underline"
                    title="Show history"
                    >Song history
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          relative
          px-6
          pt-5
          pb-8
          bg-white bg-opacity-70
          shadow-xl
          sm:max-w-2xl sm:mx-auto sm:px-8
          rounded-none
          
        "
      >
        <div class="max-w-md mx-auto">
          <div>
            <div
              class="text-center pt-5 pb-5 animate-pulse"
              v-if="action.main === 'LOADING'"
            >
              <div
                class="
                  flex
                  items-center
                  justify-center
                  space-x-2
                  animate-bounce
                  pb-3
                "
              >
                <div class="w-8 h-8 bg-black rounded-full"></div>
                <div class="w-8 h-8 bg-black rounded-full"></div>
                <div class="w-8 h-8 bg-black rounded-full"></div>
              </div>
              <h2 class="text-2xl text-black">Loading...</h2>
            </div>

            <div
              v-if="action.main === 'OK'"
              class="grid grid-cols-1 gap-3 place-items-center"
            >
              <Transition name="fade" mode="out-in">
                <div>
                  <img
                    class="mb-10"
                    v-if="spotify.audioFeatures"
                    :src="imagePath(spotify.periTotal.peri.title)"
                    :alt="spotify.periTotal.peri.title"
                  />
                </div>
              </Transition>

              <div class="grid grid-cols-2 gap-3 place-items-top">
                <div>
                  <Transition name="fade" mode="out-in">
                    <Albumcover
                      :spotify="spotify"
                      :peri-ometer="spotify.periTotal.peri.title"
                    />
                  </Transition>
                </div>
                <div v-if="_.get(listeners, '[0].foodData[0]')">
                  <Transition name="fade" mode="out-in">
                    <Menucover
                      :listeners="listeners"
                      :user="current.data.user"
                    />
                  </Transition>
                </div>
              </div>

              <Hungry
                :peri-ometer="spotify.periTotal.peri.title"
                class="mt-10"
              />

              <button class="rounded-none bg-black pl-5 pr-5">
                <ShareNetwork
                  v-if="current.data.user"
                  class="text-white"
                  network="facebook"
                  :url="`${spotify.trackUrl}`"
                  :title="`Listening to ${spotify.artistName}`"
                  description="This song is great!"
                  :quote="`Listening to ${spotify.periTotal.peri.title}'s ${spotify.artistName}`"
                  :hashtags="`${spotify.artistName.replace(
                    /\s/g,
                    ''
                  )}, nando's`"
                >
                  Share on Facebook
                </ShareNetwork>
              </button>
              <button class="rounded-none bg-black pl-5 pr-5">
                <ShareNetwork
                  v-if="current.data.user"
                  network="twitter"
                  class="text-white"
                  :url="`${spotify.trackUrl}`"
                  :title="`Listening to ${spotify.periTotal.peri.title}'s ${spotify.artistName} - ${spotify.songTitle}`"
                  description="This song is great!"
                  :quote="`Listening to ${spotify.periTotal.peri.title}'s ${spotify.artistName}`"
                  :hashtags="`${spotify.artistName.replace(/\s/g, '')},nandos,${
                    spotify.periTotal.peri.title
                  }`"
                >
                  Share on Twitter
                </ShareNetwork>
              </button>

              <div class="" v-if="current.data.user">
                <Logos />
              </div>
            </div>

            <div v-if="action.main === 'NOT_LISTENING'" class="text-black">
              <Nolistening />
            </div>
            <transition name="fade" mode="out-in">
              <div v-if="action.main === 'NOT_LOGGED_IN'">
                <Notloggedin />
              </div>
            </transition>

            <div class="divide-y divide-gray-400/50 my-5"></div>
          </div>
        </div>
      </div>

      <div
        class="
          pt-5
          bottom-5
          right-5
          pr-3
          pl-3
          pb-5
          max-w-md
          rounded-none
          sm:px-10
          mx-auto
          text-white
          z-20
          xl:fixed
          font-mono
          sm:max-w-lg
        "
      >
        <div class="copy">
          Built with
          <img src="../assets/chillie.svg" style="width: 36px" class="inline" />
          by
          <a href="https://miguelpuig.com/" target="_blank"> deck1187hw</a>
        </div>
      </div>
    </div>

    <div class="modal font-mono" id="modal-history">
      <div class="modal-box rounded-none relative">
        <Songhistory />
      </div>
    </div>

    <div class="modal font-mono" id="modal-listeners">
      <div
        class="modal-box rounded-none relative"
        v-if="current.data.currentlyPlaying"
      >
        <Listenershistory :song-data="current.data.currentlyPlaying.data" />
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
const spotify = require("../utils/spotify");
import goAuthorizationURI from "../utils/pkce-spotify";
import { getTotal } from "../utils/main";
import {
  getCurrentListeningSpoti,
  addListener,
} from "../services/nandos-service";
import { getToken, logout } from "../utils/pkce-spotify";
// import Playback from "./Playback";
const DEFAULT_TIME = "dd MMMM yyyy HH:mm:ss";

import Positiveness from "./Positiveness";
import Nolistening from "./Nolistening";
import Notloggedin from "./Notloggedin";
import Albumcover from "./Albumcover";
import Menucover from "./Menucover";
import Hungry from "./Hungry";
import Songhistory from "./Songhistory";
import Listenershistory from "./Listenershistory";
import Logos from "./Logos";

const defaultSpotify = {
  image: null,
  songTitle: null,
  albumName: null,
  albumYear: null,
  artistName: null,
  audioFeatures: null,
  getTrackExternalUrl: null,
  gradient: `rgba(42, 51, 61, 1), rgba(66, 78, 92, 1)`,
};
const defaultCurrent = {
  id: null,
  data: { user: null, audioFeatures: null, currentlyPlaying: null },
};
export default {
  name: "Home",
  components: {
    Positiveness,
    Nolistening,
    Albumcover,
    Menucover,
    Notloggedin,
    Hungry,
    Songhistory,
    Listenershistory,
    Logos,
  },
  data: function () {
    return {
      listeners: [],
      songs: [],
      envs: process.env,
      periTotal: null,
      action: {
        main: null,
      },
      now: this.$date(new Date(), DEFAULT_TIME),
      current: defaultCurrent,
      spotify: defaultSpotify,
      spoti: null,
      periometer: `medium`,
    };
  },
  methods: {
    login: function () {
      goAuthorizationURI();
    },
    imagePath: function (peri) {
      return require("../assets/periometer/periometer-" + peri + ".svg");
    },
    logout: function () {
      logout();

      location.reload();
    },
    getToken: function () {
      return getToken();
    },
    addListener: async function () {
      const listeners = await addListener(this.currentTrackId);
      this.listeners = _.get(listeners, "data.listeners")
        ? listeners.data.listeners
        : [];
    },
    refreshUi: function () {
      this.spotify.image = this.spoti.getImage();
      this.spotify.songTitle = this.spoti.getSongTitle();
      this.spotify.albumName = this.spoti.getAlbumName();
      this.spotify.albumYear = this.spoti.getAlbumYear();
      this.spotify.artistName = this.spoti.getArtistName();
      this.spotify.trackUrl = this.spoti.getTrackExternalUrl();
      this.spotify.gradient = this.spoti.getGradient();
      this.spotify.audioFeatures = this.spoti.getAudioFeatures();
      this.spotify.periTotal = getTotal(this.spotify.audioFeatures);
    },
    refreshApi: async function () {
      const response = await getCurrentListeningSpoti();
      if (response.status === 200) {
        this.current.id = response.data.currentlyPlaying.data.item.id;
        this.current.data = response.data;
        this.action.main = "OK";
      }
      if (response.status === 204) {
        this.action.main = "NOT_LISTENING";
        this.current.data = defaultCurrent;
      }
      if (response.status === 401) {
        this.current.data = response.data;
        this.current.data = defaultCurrent;
        this.action.main = "NOT_LOGGED_IN";
      }
    },
  },
  created: async function () {},
  computed: {
    currentTrackId() {
      return this.current.id;
    },
    _() {
      return _;
    },
  },
  watch: {
    async currentTrackId() {
      this.spoti = new spotify(this.current);
      this.refreshUi();
      this.addListener();
    },
  },
  mounted: function () {
    this.action.main = "LOADING";
    this.refreshApi();

    window.setInterval(() => {
      // If the user is logged in, refresh every 5 secs
      if (this.action.main === "OK" || this.action.main === "NOT_LISTENING") {
        this.refreshApi();
      }
    }, 8000);

    window.setInterval(() => {
      this.now = this.$date(new Date(), DEFAULT_TIME);
    }, 1000);
  },
};
</script>
<style scoped>
.artist-name {
  font-size: 900%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>