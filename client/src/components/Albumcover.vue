<template>
  <div class="relative">
    <a
      class="
        absolute
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
      <div class="grid grid-cols-1 gap-3 place-items-center pb-10 text-white">
        <div class="hungry">
          <h2 class="text-2xl">Hungry?</h2>
          <p class="lead">Order something for</p>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-3 place-items-center">
        <div class="pl-5">
          <a
            :href="`https://order.nandos.co.uk/store/store-selection?sauce=${periOmeter}`"
            target="_blank"
            class="
              flex
              items-center
              justify-center
              rounded-none
              w-full
              px-14
              py-2
              text-base
              bg-transparent
              transition-colors
              duration-200
              transform
              border
              hover:bg-white hover:text-black hover:border-black
              dark:bg-white dark:text-black dark:border-black
              subpixel-antialiased
              border-white
              uppercase
              text-white
              tracking-wide
            "
          >
            <span class="text-xl">Delivery</span></a
          >
        </div>
        <div>
          <a
            :href="`https://www.nandos.co.uk/order/search?sauce=${periOmeter}`"
            target="_blank"
            class="
              flex
              items-center
              justify-center
              rounded-none
              w-full
              px-14
              py-2
              text-base
              bg-transparent
              transition-colors
              duration-200
              transform
              border
              hover:bg-white hover:text-black hover:border-black
              dark:bg-white dark:text-black dark:border-black
              subpixel-antialiased
              border-white
              uppercase
              text-white
              tracking-wide
            "
          >
            <span class="text-xl">Collect</span></a
          >
        </div>
      </div>
    </a>
    <a href="#" class="relative">
      <div class="flex flex-wrap content-center">
        <img
          :src="spotifyImage"
          :key="spotifyImage"
          v-if="spotifyImage"
          class="mx-auto"
          alt=""
        />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "Albumcover",
  props: ["spotifyImage", "periOmeter"],
  methods: {},
};
</script>