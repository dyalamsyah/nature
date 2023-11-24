/** @type {import('jest').Config} */
const config = {
  testMatch: ["**/tests/**/*.test.[jt]s"],
  setupFiles: ["fake-indexeddb/auto"],
  testEnvironment: "jsdom",

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.(js|ts)$": "babel-jest",
  },
};

module.exports = config;
