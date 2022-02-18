<template>
  <div class="text-white p-2 grid grid-cols-3 gap-0 place-items-center">
    <button class="hover:opacity-50">
      <svg
        class="w-8 h-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
      </svg>
    </button>

    <button class="hover:opacity-50">
      <svg
        class="w-8 h-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
      </svg>
    </button>
    <button class="hover:opacity-50" @click="next">
      <svg
        class="w-8 h-8"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
      </svg>
    </button>
  </div>
</template>

<script>


export default {
  name: "Playback",
  methods: {
    next: function () {

    },
  }
};
</script>