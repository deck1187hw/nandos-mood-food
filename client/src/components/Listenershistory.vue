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
      <a
        href="javascript:void(0)"
        class="
          bg-black
          pr-2
          pl-2
          text-white
          cursor-pointer
          button
          hover:bg-opacity-70
        "
        @click="getSongListeners"
        >Refresh</a
      >
    </div>
    <div class="relative mt-8">
      <h3
        class="font-bold text-md pr-3 pl-3 pt-1 pb-1 mb-3"
        v-if="listeners.length > 0"
      >
        {{ songData.item.artists[0].name }} -
        {{ songData.item.name }}
      </h3>

      <div class="" v-if="listeners.length > 0">
        <div :key="listener.id" v-for="(listener, key) in listeners">
          <div
            :class="`
                    overflow-hidden
                    relative
                    max-w-md
                    mx-auto
                    shadow-lg
                    rounded-xl
                    flex
                    items-center z-50
                    gap-6
                    dark:bg-slate-800 dark:highlight-white/5
                    ${key === 0 ? 'bg-green-600' : ''}
                  `"
          >
            <img
              :src="getMenuImage(listener)"
              :key="getMenuImage(listener)"
              v-if="getMenuImage(listener)"
              class="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
              :alt="listener.foodData.displayName"
            />

            <div class="absolute text-xs  top-1 right-2 z-50">
              {{ formatDate(listener.created._seconds).main }}
            </div>

            <div class="min-w-0 py-5 pl-28 pr-5">
              <div
                class="
                  text-slate-900
                  font-medium
                  text-sm
                  sm:text-base
                  dark:text-slate-200
                "
              >
                <span class="text-md">{{
                  listener.foodData[0].displayName
                }}</span>
              </div>
              <div
                class="
                  text-slate-500
                  font-medium
                  text-sm
                  sm:text-base
                  dark:text-slate-400
                "
              >
                <span class="text-xs">
                  Tagged by
                  <a
                  class="underline"
                    :href="`https://open.spotify.com/user/${listener.data.id}`"
                    target="_blank"
                    >{{ listener.data.id }}</a
                  >
                </span>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-3 pr-2 pb-2">
            <div></div>

            <div class="col-span-2"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const COUNTER_API = 60; // We cache the results in the backend
import _ from "lodash";
import { getSongListeners } from "../services/nandos-service";
import { epochConverter } from "../utils/main";
export default {
  name: "ListenersHistory",
  props: ["songData"],

  computed: {
    _() {
      return _;
    },
    currentTrackId() {
      return this.songData.item.id;
    },
  },
  data: function () {
    return {
      songs: [],
      countDown: COUNTER_API,
      refreshEnabled: true,
      autorefresh: true,
      listeners: [],
    };
  },
  watch: {
    async currentTrackId() {
      this.getSongListeners();
    },
  },
  methods: {
    formatDate(dateEpoch) {
      const converted = epochConverter(dateEpoch);
      return converted;
    },
    getMenuImage(listener) {
      return _.get(listener, "foodData[0].image.aspectRatio_1_1.res200x200")
        ? listener.foodData[0].image.aspectRatio_1_1.res200x200
        : null;
    },
    getSongListeners: async function () {
      const listeners = await getSongListeners(this.songData.item.id);

      this.listeners = _.get(listeners, "data") ? listeners.data : [];
    },
  },

  mounted() {
    this.getSongListeners();
    window.setInterval(() => {
      this.getSongListeners();
    }, 7000);
  },
};
</script>