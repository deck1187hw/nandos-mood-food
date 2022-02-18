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
        py-6
        flex flex-col
        justify-center
        relative
        overflow-hidden
        sm:py-12
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
          opacity-10
          text-right text-white
          tracking-tighter
        "
        v-if="spotify.artistName && action === `OK`"
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
            <div class="stats-artist mb-3 mt-3 pr-5 xl:pr-1">
              <div class="top-date" v-if="spotify.artistName">
                <span class="font-extrabold">{{ spotify.artistName }}</span
                ><br />
                <span class="">{{ spotify.songTitle }}</span>
                <br />
                <span class="">{{ spotify.albumName }}</span>
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
                  font-semibold
                  text-center
                "
              >
                {{ current.data.user.data.display_name }}
              </div>

              <div class="mt-2 text-white uppercase text-center">
                <a
                  :href="current.data.user.data.external_urls.spotify"
                  target="_blank"
                  class="mr-3 text-xs underline"
                  title="Spotify Profile"
                  v-on:click="logout"
                  >Profile</a
                >

                <a
                  href="javascript:void(0)"
                  class="mr-2 text-xs underline"
                  title="Logout"
                  v-on:click="logout"
                  >Logout</a
                >
              </div>
              <div class="text-center top-date font-light text-xs mt-2 italic">
                {{ now }}
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
          bg-white bg-opacity-80
          shadow-xl
          sm:max-w-lg sm:mx-auto sm:px-10
          rounded-none
        "
      >
        <div class="max-w-md mx-auto">
          <div class="divide-y">
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
              <h2 class="text-2xl">Loading...</h2>
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
              <Transition name="fade" mode="out-in">
                <Albumcover
                  :spotify-image="spotify.image"
                  :peri-ometer="spotify.periTotal.peri.title"
                />
              </Transition>

              <ShareNetwork
                v-if="current.data.user"
                class="text-black"
                network="facebook"
                :url="`${current.data.user.data.external_urls.spotify}`"
                :title="`Listening to ${spotify.artistName}`"
                description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
                :quote="`Listening to ${spotify.periTotal.peri.title}'s ${spotify.artistName}`"
                :hashtags="`${spotify.artistName.replace(/\s/g, '')}, nando's`"
              >
                Share on Facebook
              </ShareNetwork>

              <div class="" v-if="current.data.user">
                <div
                  class="grid grid-cols-2 gap-3 place-items-center opacity-50"
                >
                  <div>
                    <a
                      href="https://www.nandos.co.uk/"
                      target="_blank"
                      title="Nando's"
                    >
                      <img
                        src="../assets/barci.svg"
                        style="width: 120px"
                        class="items-center justify-center mb-5 nandos-logo"
                      />
                    </a>
                  </div>
                  <div>
                    <a
                      :href="current.data.user.data.external_urls.spotify"
                      target="_blank"
                      title="Spotify profile"
                    >
                      <img
                        src="../assets/Spotify-Black-Logo.wine.svg"
                        style="width: 140px"
                        class="items-center justify-center pb-2"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div v-if="action.main === 'NOT_LISTENING'" class="text-black">
              <Nolistening />
            </div>
            <transition name="fade" mode="out-in">
              <div v-if="action.main === 'NOT_LOGGED_IN'">
                <div class="grid grid-cols-2 gap-3 place-items-center mb-7">
                  <img
                    src="../assets/Spotify-Black-Logo.wine.svg"
                    style="width: 140px"
                    class="items-center justify-center opacity-30"
                  />

                  <img
                    src="../assets/barci.svg"
                    style="width: 120px"
                    class="
                      items-center
                      grayscale
                      justify-center
                      opacity-30
                      mb-3
                      nandos-logo
                    "
                  />
                </div>

                <a
                  v-on:click="login"
                  href="javascript:void(0)"
                  class="
                    flex
                    items-center
                    justify-center
                    rounded-none
                    w-full
                    px-14
                    py-2
                    mt-2
                    space-x-3
                    text-2xl text-center
                    bg-transparent
                    transition-colors
                    duration-200
                    transform
                    border
                    font-sans
                    dark:text-white
                    dark:border-white
                    dark:hover:bg-white
                    dark:hover:text-black
                    hover:bg-black hover:text-white
                    subpixel-antialiased
                    font-bold
                    border-black
                    uppercase
                    text-black
                    tracking-wide
                    animate-bounce
                  "
                >
                  <span class="text-xl">What are you listening?</span></a
                >
                <p class="text-center text-sm mt-7 opacity-60 text-black">
                  Click above to give permission
                  <br />
                  <small
                    >We won't share any information with anyone or store it
                    anywhere</small
                  >
                </p>
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
          Built with love by
          <a href="https://miguelpuig.com/" target="_blank"> deck1187hw</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
const spotify = require("../utils/spotify");
import goAuthorizationURI from "../utils/pkce-spotify";
import { getTotal } from "../utils/main";
import { getCurrentListeningSpoti } from "../services/nandos-service";
import { getToken, logout } from "../utils/pkce-spotify";
// import Playback from "./Playback";
const DEFAULT_TIME = "dd MMMM yyyy HH:mm:ss";

import Positiveness from "./Positiveness";
import Nolistening from "./Nolistening";
import Albumcover from "./Albumcover";

const defaultSpotify = {
  image: null,
  songTitle: null,
  albumName: null,
  albumYear: null,
  artistName: null,
  audioFeatures: null,
  gradient: `rgba(42, 51, 61, 1), rgba(66, 78, 92, 1)`,
};
const defaultCurrent = {
  id: null,
  data: { user: null, audioFeatures: null, currentlyPlaying: null },
};
export default {
  name: "Home",
  metaInfo: {
    title: "Nando's Peri Mood",
    htmlAttrs: {
      lang: "en",
      amp: false,
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Find out the mood of a song based on its valance, danceability and energy",
      },
    ],
  },
  components: {
    // Playback,
    Positiveness,
    Nolistening,
    Albumcover,
  },
  data: function () {
    return {
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
    refreshUi: function () {
      this.spotify.image = this.spoti.getImage();
      this.spotify.songTitle = this.spoti.getSongTitle();
      this.spotify.albumName = this.spoti.getAlbumName();
      this.spotify.albumYear = this.spoti.getAlbumYear();
      this.spotify.artistName = this.spoti.getArtistName();
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
    currentTrackId() {
      this.spoti = new spotify(this.current);
      this.refreshUi();
    },
  },
  mounted: function () {
    this.action.main = "LOADING";
    this.refreshApi();

    window.setInterval(() => {
      // If the user is logged in, refresh every 5 secs
      if (this.action.main === "OK") {
        this.refreshApi();
      }
    }, 5000);

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
.nandos-logo {
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>