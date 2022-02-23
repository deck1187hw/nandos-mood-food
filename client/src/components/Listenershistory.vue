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
        class="font-bold text-md pr-3 pl-3 pt-1 pb-1"
        v-if="listeners.length > 0"
      >
        {{ songData.item.name }}
      </h3>

      <div class="" v-if="listeners.length > 0">
        <table class="table table-compact w-full table-zebra">
          <tbody>
            <tr v-for="listener in listeners" :key="listener.id">
              <td>
                <div class="grid grid-cols-3 pr-2 pb-2">
                  <div>
                    <img
                      :src="getMenuImage(listener)"
                      :key="getMenuImage(listener)"
                      v-if="getMenuImage(listener)"
                      class="h-20 ml-1"
                      :alt="listener.foodData.displayName"
                    />
                  </div>

                  <div class="col-span-2">
                    <span
                      class="text-xs italic tooltip"
                      :data-tip="formatDate(listener.created._seconds).main"
                      >{{
                        formatDate(listener.created._seconds).relative
                      }}</span
                    >
                    <br />
                    by
                    <a
                      :href="`https://open.spotify.com/user/${listener.data.id}`"
                      target="_blank"
                      >{{ listener.data.id }}</a
                    ><br />
                    <span class="font-bold">{{
                      listener.foodData[0].displayName
                    }}</span>
                  </div>
                </div>
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