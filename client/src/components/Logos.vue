<template>
  <div class="grid grid-cols-2 gap-3 place-items-center opacity-50">
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