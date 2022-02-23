<template>
  <div class="grid grid-cols-2 gap-3 place-items-center opacity-50">
<div class="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
    <img class="absolute -left-6 w-28 h-28 rounded-full shadow-lg" src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80">
    <div class="min-w-0 py-5 pl-28 pr-5">
      <div class="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">Andrew Alfred</div>
      <div class="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">Assistant to the Traveling Secretary</div>
    </div>
  </div>


    <div>
      <a href="https://www.nandos.co.uk/" target="_blank" title="Nando's">
        <img
          src="../assets/barci.svg"
          style="width: 120px"
          class="items-center justify-center mb-5 nandos-logo"
        />
      </a>
    </div>
    <div>
      <a
        href="https://www.spotify.com/"
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
</template>

<script>
export default {
  name: "Logos",
  methods: {},
  props: [""],
};
</script>
<style scoped>
.nandos-logo {
  filter: gray; /* IE6-9 */
  -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */
  filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */
}
</style>