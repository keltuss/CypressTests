const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    blockHosts: ['pagead2.googlesyndication.com', 'ad.plus', 'googletagservices.com', 'google.com',
      'googleads.g.doubleclick.net', 'adservice.google.com', 'zerostep.com'],
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
