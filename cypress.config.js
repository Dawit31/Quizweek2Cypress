const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : "https://demowebshop.tricentis.com/",
    viewportWidth : 1280,
    viewportHeight : 720,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
