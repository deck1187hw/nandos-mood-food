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

    <div class="grid grid-cols-1 gap-3 place-items-center pt-10 pb-10">
      <h1 class="text-3xl opacity-60 font-extrabold">Not playing?</h1>
      <p>Play something on Spotify and come back.</p>
    </div>

    <div class="grid grid-cols-2 gap-3 place-items-center"></div>
  </div>
</template>

<script>
export default {
  name: "Playback",
  methods: {
    next: function () {},
  },
};
</script>