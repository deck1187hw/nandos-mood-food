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
        <img
          :src="lastListenedFood.image.aspectRatio_1_1.res916x916"
          :key="lastListenedFood.image.aspectRatio_1_1.res916x916"
          v-if="lastListenedFood.image.aspectRatio_1_1.res916x916"
          class="mx-auto"
          :alt="lastListenedFood.displayName"
        />
      </div>
    </div>
    <div class="description mt-4">
      <h3 class="font-semibold">{{ lastListenedFood.displayName }}</h3>
      <p class="text-xs">{{ lastListenedFood.description }}</p>
    </div>

    <div class="description mt-4">
      <h3 class="font-bold">
        Listened by <span class="">{{ listenerUser.id }}</span>
      </h3>
      <p class="text-xs">{{ listenerUser.created }}</p>
    </div>
  </div>
</template>

<script>
// const DEFAULT_TIME = "dd MMMM yyyy HH:mm:ss";
export default {
  name: "Menucover",
  props: ["listeners"],
  methods: {},
  computed: {
    lastListenedFood() {
      return this.listeners[0].foodData[0];
    },
    listenerUser() {
      const date = Date(this.listeners[0].created._seconds);

      return {
        id: this.listeners[0].id,
        created: date,
      };
    },
  },
};
</script>