import VueI18n from "vue-i18n";
import Vue from "vue";
const en = require("./lang/en.json");
const rus = require("./lang/rus.json");

Vue.use(VueI18n);

const loadLocalMessages = () => {
  const files = require.context("./lang", true, /^.json/);
  console.log(files);
};

export default new VueI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en,
    rus
  }
});
