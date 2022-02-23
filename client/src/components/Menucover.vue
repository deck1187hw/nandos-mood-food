<template>
  <div class="relative text-black">
    <a
      class="
        inset-0
        z-10
        h-full
        bg-black
        text-center
        flex flex-col
        items-center
        justify-center
        opacity-0
        hover:opacity-100
        bg-opacity-60
        duration-300
      "
    >
    </a>

    <div class="relative">
      <div class="flex flex-wrap content-center">
        <img
          :src="lastListenedFood.image.aspectRatio_1_1.res916x916"
          :key="lastListenedFood.image.aspectRatio_1_1.res916x916"
          v-if="lastListenedFood.image.aspectRatio_1_1.res916x916"
          class="mx-auto"
          :alt="lastListenedFood.displayName"
        />
      </div>
    </div>
    <div class="description mt-4">
      <h3 class="font-semibold">{{ lastListenedFood.displayName }}</h3>
      <p class="text-xs">{{ lastListenedFood.description }}</p>
    </div>

    <div
      class="
        description
        mt-4
        border border-black
        px-3
        pb-3
        pt-3
        bg-yellow-200
        relative
      "
    >
      <div
        class="absolute top-0 right-0 bg-green-600 text-white pl-3 pr-3 text-xs"
      >
        You!
      </div>
      <strong class="font-normal">
        Tagged by
        <a
          :href="`https://open.spotify.com/user/${listenerUser.id}`"
          target="_blank"
          class="tooltip pl-1 pr-1 bg-black text-white"
          data-tip="View Spotify profile"
          ><span class="">{{ listenerUser.id }}</span></a
        >
      </strong>
      <p class="text-xs">on {{ listenerUser.created.main }}</p>

      <div>
        <a
          href="#modal-listeners"
          class="mr-2 text-xs underline"
          title="Show listeners"
          >Song listeners
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// const DEFAULT_TIME = "dd MMMM yyyy HH:mm:ss";
import { epochConverter } from "../utils/main";

export default {
  name: "Menucover",
  props: ["listeners"],
  methods: {},
  computed: {
    lastListenedFood() {
      return this.listeners[0].foodData[0];
    },
    listenerUser() {
      return {
        id: this.listeners[0].id,
        created: epochConverter(this.listeners[0].created._seconds),
      };
    },
  },
};
</script>