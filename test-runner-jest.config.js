const { getJestConfig } = require("@storybook/test-runner");

// The default Jest configuration comes from @storybook/test-runner
const testRunnerConfig = getJestConfig();

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  ...testRunnerConfig,
  preset: "jest-playwright-preset",

  roots: ["<rootDir>/story-book-task/src/"],
};
