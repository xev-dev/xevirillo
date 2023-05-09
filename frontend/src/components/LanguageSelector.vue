<template>
  <div class="languageSelectorWrapper">
    <font-awesome-icon icon="fa-solid fa-language" />
    <select
      @change="changeLang"
      v-model="$i18n.locale"
      class="languageSelector"
    >
      <option v-for="lang in languages" :key="lang.value" :value="lang.value">
        {{ lang.string }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      languages: [
        { string: "Español", value: "es" },
        { string: "Català", value: "cat" },
        { string: "Français", value: "fr" },
        { string: "English", value: "en" },
        { string: "Deutsch", value: "de" },
      ],
    };
  },
  computed: {
    defaultValue: function () {
      const lang = localStorage.getItem("lang");
      const found = this.languages.find((language) => language.value === lang);
      return found.value;
    },
  },
  methods: {
    changeLang: function (e) {
      localStorage.setItem("lang", e.target.value);
    },
  },
};
</script>
