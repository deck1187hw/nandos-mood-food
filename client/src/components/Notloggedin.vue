<template>
  <div class="pt-10">
    <a
      v-on:click="login"
      href="javascript:void(0)"
      :class="`
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
        duration-400
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
        

            ${
              !agree_username
                ? 'opacity-25 cursor-not-allowed'
                : 'animate-bounce border-green'
            }`"
    >
      <span class="text-xl">What are you listening?</span></a
    >
    <div class="text-center text-sm mt-5 opacity-60 text-black">
      <div class="form-check ml-7 text-xs">
        <input
          v-model="agree_username"
          :class="`

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
          `"
          type="checkbox"
          id="agree_username"
        />
        {{ agree_username }}
        <label
          class="form-check-label inline-block cursor-pointer dark:text-white"
          for="agree_username"
        >
          I agree to share my Spotify Username
        </label>
      </div>
    </div>
    <div class="logos pt-5">
      <Logos />
    </div>
  </div>
</template>

<script>
import Logos from "./Logos";
import goAuthorizationURI from "../utils/pkce-spotify";
export default {
  components: {
    Logos,
  },
  name: "Notloggedin",

  data: function () {
    return {
      agree_username: false,
    };
  },
  methods: {
    login: function () {
      if (this.agree_username) {
        goAuthorizationURI();
      }
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