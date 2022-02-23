<template>
  <div>
    <div class="grid grid-cols-1gap-2 place-items-center">
      <div class="opacity-100 pt-5" style="color: #1db954">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-16 w-16"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            clip-rule="evenodd"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
          />
        </svg>
      </div>
    </div>

    <div class="grid grid-cols-1 gap-3 place-items-center pt-10 pb-10 mb-3">
      <h1 class="text-2xl opacity-40 font-extrabold mb-4">Not playing?</h1>

      <a
        href="https://play.spotify.com/"
        target="_blank"
        class="
          flex
          items-center
          justify-center
          rounded-none
          w-full
          px-14
          py-2
          mt-2
          mb-3
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
        <span class="text-xl">Open Spotify</span></a
      >

      <p>Play something on Spotify and come back.</p>
    </div>

    <Logos />

    <div class="grid grid-cols-2 gap-3 place-items-center"></div>
  </div>
</template>

<script>
import Logos from "./Logos";
export default {
  name: "Playback",
  components: {
    Logos,
  },
  methods: {
    next: function () {},
  },
};
</script>