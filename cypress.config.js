const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 20000,
    pageLoadTimeout: 200000,
    viewportHeight: 770,
    viewportWidth: 1200,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },
});
