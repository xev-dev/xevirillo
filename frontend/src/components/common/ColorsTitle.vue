<template>
  <h1 class="colorsTitle">
    <span
      v-for="(char, index) in text"
      :key="index"
      :style="{ color: colors[conditionalIndex(index)] }"
      >{{ char }}</span
    >
  </h1>
</template>

<script>
export default {
  props: {
    text: String,
  },
  data: () => {
    return {
      colors: [
        "rgb(16 185 129)",
        "rgb(239 68 68)",
        "rgb(249 115 22)",
        "rgb(6 182 212)",
      ],
    };
  },
  methods: {
    conditionalIndex: function (index) {
      return index >= this.colors.length ? index % this.colors.length : index;
    },
  },
};
</script>
