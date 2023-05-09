import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context(
    "./utils/i18n",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

function getLang() {
  if (!localStorage.getItem("lang")) {
    let lang =
      navigator.languages !== undefined
        ? navigator.languages[0].split("-")[0]
        : navigator.language.split("-")[0];
    localStorage.setItem("lang", lang);
    return lang;
  }
  return localStorage.getItem("lang");
}

export default new VueI18n({
  locale: getLang(),
  fallbackLocale: "en",
  messages: loadLocaleMessages(),
});
