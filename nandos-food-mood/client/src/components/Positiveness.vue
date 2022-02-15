<template>
  <div
    :class="`positiveness positiveness-${keyPositive} pt-1 pb-1`"
    v-if="audioFeatures"
  >
    {{ mainText }}:
    <span class="font-bold badge badge-outline text-white"
      >{{ Math.ceil(audioFeatures[keyPositive] * 100) }}% - {{
        getPositiveness(keyPositive, audioFeatures).peri
      }}</span
    >
    <Question :main-text="getExplanation()" />
  </div>
</template>

<script>
import Question from "./Question";
export default {
  components: {
    Question,
  },
  props: ["mainText", "audioFeatures", "keyPositive"],
  data: function () {
    return {
      explanation: "asd",
    };
  },
  name: "Positiveness",
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
      let peri = "medium";
      let tf = audioFeatures[typeFeature];

      if (tf >= 0 && tf < 0.2) {
        peri = "extra-mild";
      }
      if (tf >= 0.2 && tf < 0.4) {
        peri = "mild";
      }
      if (tf >= 0.4 && tf < 0.6) {
        peri = "medium";
      }
      if (tf >= 0.6 && tf < 0.8) {
        peri = "hot";
      }
      if (tf >= 0.8 && tf < 1) {
        peri = "extra-hot";
      }
      return {
        peri: peri,
        percentage: Math.ceil(tf * 100),
        tf: tf,
      };
    },
  },
};
</script>