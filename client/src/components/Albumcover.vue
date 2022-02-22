<template>
  <div class="relative">
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
        <a :href="spotify.trackUrl" target="_blank">
          <img
            :src="spotify.image"
            :key="spotify.image"
            v-if="spotify.image"
            class="mx-auto"
            :alt="spotify.songTitle"
          />
        </a>
      </div>
    </div>
    <div class="description mt-4">
      <h3 class="font-semibold">{{ spotify.songTitle }}</h3>
      <p class="text-xs">{{ spotify.artistName }}</p>
      <p class="text-xs">{{ spotify.albumName }} - {{ spotify.albumYear }}</p>

    </div>
  </div>
</template>

<script>
export default {
  name: "Albumcover",
  props: ["spotify", "periOmeter"],
  methods: {},
};
</script>