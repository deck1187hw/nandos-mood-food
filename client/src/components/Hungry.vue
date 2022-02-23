<template>
  <div>
    <div
      class="
        grid grid-cols-1
        gap-3
        place-items-center
        pb-4
        text-black
        pt-8
        text-center
      "
    >
      <div class="hungry items-center justify-center">
        <h2 class="text-2xl">Hungry?</h2>
      </div>
    </div>
    <div class="flex flex-wrap place-items-center">
      <div class="w-full mb-4">
        <a
          :href="`https://www.nandos.co.uk/ordering-online?sauce=${periOmeter}`"
          target="_blank"
          class="
            flex
            items-center
            justify-center
            rounded-none
            w-full
            px-10
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
            border-black
            uppercase
            text-black
            tracking-wide
          "
        >
          <span class="text-xl">Order {{ periOmeter }} now</span></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hungry",
  props: ["periOmeter"],
  methods: {},
};
</script>