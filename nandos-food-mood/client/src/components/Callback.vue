
<template>
  <div
    class="
      min-h-screen
      bg-gradient-to-r
      from-blue-500
      to-pink-500
      py-6
      flex flex-col
      justify-center
      relative
      overflow-hidden
      sm:py-12
      bg-top-left bg-origin-border bg-clip-border bg-fixed bg-center bg-cover
    "
  >
  </div>
</template>
<script>
import { generateToken, saveToken } from "../utils/pkce-spotify";

function getHashParams() {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.href.split("?")[1];
  while ((e = r.exec(q))) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
  }
  return hashParams;
}

export default {
  name: "Callback",
  data: function () {
    return {
      envs: process.env,
      msg: "",
    };
  },
  methods: {},
  created: function () {
    const { error, code, state } = getHashParams();

    if (error) {
      this.msg = "There was an error during the authentication";
    }
    generateToken(state, code).then((tokenData) => {
      if (tokenData.error) {
        this.msg = "Access token retrive error";
        this.$router.push("/");
      } else {
        saveToken(tokenData);
        this.$router.push("/");
      }
    });
    // `this` points to the vm instance

    // const token1 = getToken();
    // console.log('token1 ',token1)
  },
};
</script>