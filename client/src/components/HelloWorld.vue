<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    Envs {{ envs }}
    <button v-on:click="login">LOGIN</button>
    <pre>{{ auth1 }}</pre>
    <p>
      F2or a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
  </div>
</template>

<script>
import goAuthorizationURI from "../utils/pkce-spotify";
// import { getToken } from "../utils/pkce-spotify";

export default {
  name: "HelloWorld",
  data: function () {
    return {
      envs: process.env,
      auth1: goAuthorizationURI,
    };
  },
  methods: {
    login: function () {
      console.log("login in...");
      goAuthorizationURI();
    },
  },
  created: function () {
    // `this` points to the vm instance
    console.log("a is: " + goAuthorizationURI);
    // const token1 = getToken();
    // console.log('token1 ',token1)
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
