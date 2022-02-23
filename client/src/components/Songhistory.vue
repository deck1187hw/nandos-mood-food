<template>
  <div>
    <div class="modal-action mt-0 fixed top-5 right-0">
      <a
        href="#"
        class="
          bg-black
          pr-2
          pl-2
          text-white
          cursor-pointer
          button
          hover:bg-opacity-70
        "
        >Close</a
      >
    </div>

    <div class="modal-action mt-0 fixed top-5 left-0">
      <div class="form-check ml-7 text-xs">
        <input
          v-model="autorefresh"
          class="
            form-check-input
            h-4
            w-4
            border border-gray-300
            rounded-sm
            bg-white
            checked:bg-blue-600 checked:border-blue-600
            focus:outline-none
            transition
            duration-200
            mt-0
            align-top
            bg-no-repeat bg-center bg-contain
            float-left
            mr-2
            cursor-pointer
          "
          type="checkbox"
          id="autorefresh"
        />
        <label
          class="form-check-label inline-block cursor-pointer dark:text-white"
          for="autorefresh"
        >
          Auto refresh
          <span v-if="countDown !== 0" class="text-xs">
            in {{ countDown }} seconds
          </span>
        </label>
      </div>
    </div>
    <div class="relative mt-8">
      <h3
        class="
          font-bold
          text-md
          bg-black
          dark:bg-white
          text-white
          pr-3
          pl-3
          pt-1
          pb-1
        "
        v-if="songs.length > 0"
      >
        Last {{ songs.length > 0 ? songs.length : 50 }} songs listened
      </h3>

      <h3
        class="font-bold text-md pr-3 pl-3 pt-1 pb-1"
        v-if="songs.length === 0"
      >
        No songs listened... so far
      </h3>
      <div class="" v-if="songs.length > 0">
        <table class="table table-compact w-full table-zebra">
          <tbody>
            <tr v-for="song in songs" :key="song.id">
              <td style="width:100px;">
                <img
                  :src="getSongAlbumImage(song)"
                  :key="getSongAlbumImage(song)"
                  v-if="getSongAlbumImage(song)"
                  class="h-10 ml-1 "
                  :alt="song.data.song.name"
                />
              </td>
              <td>
                <span class="text-xs italic">{{
                  formatDate(song.created._seconds).relative
                }}</span>
                <br />
                <strong>{{ song.foodData[0].displayName }}</strong
                ><br />
                <span class="font-bold">{{
                  song.data.song.artists[0].name
                }}</span>
                <br />
                <span class="italic text-xs">{{ song.data.song.name }} </span
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
const COUNTER_API = 60; // We cache the results in the backend
import _ from "lodash";
import { getMySongs } from "../services/nandos-service";
import { epochConverter } from "../utils/main";
export default {
  name: "Albumcover",
  props: ["spotify", "periOmeter"],

  computed: {
    _() {
      return _;
    },
  },
  data: function () {
    return {
      songs: [],
      countDown: COUNTER_API,
      refreshEnabled: true,
      autorefresh: true,
    };
  },
  methods: {
    formatDate(dateEpoch) {
      const converted = epochConverter(dateEpoch);
      return converted;
    },
    getSongAlbumImage(song) {
      return _.get(song, "data.song.album.images[1].url")
        ? song.data.song.album.images[1].url
        : null;
    },
    getMySongs: async function () {
      if (this.refreshEnabled) {
        const songs = await getMySongs();
        this.songs = _.get(songs, "data") ? songs.data : [];
        this.countDown = COUNTER_API;
        this.countDownTimer();
        this.refreshEnabled = false;
      }
    },
    countDownTimer() {
      if (this.countDown > 0) {
        setTimeout(() => {
          this.countDown -= 1;
          this.countDownTimer();
        }, 1000);
      } else {
        this.refreshEnabled = true;
        if (this.autorefresh) {
          this.getMySongs();
        }
      }
    },
  },

  mounted() {
    this.getMySongs();
  },
};
</script>