const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");

setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "e2e/**/*.test.js",
  output: "e2e/output",
  helpers: {
    Playwright: {
      browser: "chromium",
      url: "http://localhost:9003",
      show: true,
    },
  },
  include: {
    I: "./steps_file.js",
  },
  name: "restaurant-projek",
  plugins: {
    screenshotOnFail: {
      enabled: false,
    },
  },
};
