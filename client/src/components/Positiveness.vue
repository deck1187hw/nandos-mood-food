<template>
  <div
    :class="`positiveness positiveness-${keyPositive} pt-1 pb-1`"
    v-if="audioFeatures"
  >
    {{ mainText }}: {{ Math.ceil(audioFeatures[keyPositive] * 100) }}% -
    <span
      :class="`pl-1 pr-1 w-44	badge-${
        getPositiveness(keyPositive, audioFeatures).peri.title
      } text-white`"
      :style="`background-color:${
        getPositiveness(keyPositive, audioFeatures).peri.color
      }; border:none`"
      >{{ getPositiveness(keyPositive, audioFeatures).peri.title }}</span
    >
    <Question :main-text="getExplanation()" class="invisible xl:visible" />
  </div>
</template>

<script>
import Question from "./Question";
import { getPeriAttrs } from "../utils/main";
export default {
  components: {
    Question,
  },
  props: ["mainText", "audioFeatures", "keyPositive"],
  data: function () {
    return {
      explanation: "",
      positiveness: { peri: null, percentage: null, tf: null },
    };
  },
  name: "Positiveness",
  created: async function () {
    this.positiveness = {};
  },
  methods: {
    getExplanation() {
      switch (this.keyPositive) {
        case "valence":
          return "Valence describes the musical positiveness conveyed by a track. Tracks with high valence sound more positive (happy, cheerful, euphoric), while tracks with low valence sound more negative (sad, depressed, angry).";

        case "danceability":
          return "Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity.";

        case "energy":
          return "Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy.";
      }
    },
    getPositiveness(typeFeature, audioFeatures) {
      let tf = audioFeatures[typeFeature];
      const peri = getPeriAttrs(tf);
      return {
        peri: peri,
        percentage: Math.ceil(tf * 100),
        tf: tf,
      };
    },
  },
};
</script>
<style>
.badge-mild {
  background-color: rgb(151, 195, 30);
  border: none;
}
</style>