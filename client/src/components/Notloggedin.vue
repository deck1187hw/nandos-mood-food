<template>
  <div>
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
        >We won't share any information with anyone or store it anywhere</small
      >
    </p>
  </div>
</template>

<script>
import goAuthorizationURI from "../utils/pkce-spotify";
export default {
  name: "Playback",
  methods: {
    login: function () {
      goAuthorizationURI();
    },
  },
};
</script>
<style scoped>
.nandos-logo {
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
}
</style>