import globals from "globals";
import btrz from "eslint-config-btrz-base";

const importRuleCompatibilityPlugin = {
  rules: {
    // Keep compatibility with legacy `/* eslint-disable import/extensions */`
    // comments without depending on eslint-plugin-import (which doesn't yet
    // support ESLint 10 peer deps).
    extensions: {
      meta: {
        type: "problem",
        docs: {
          description: "Compatibility placeholder for legacy disable comments"
        },
        schema: []
      },
      create() {
        return {};
      }
    }
  }
};

export default [
  {
    ignores: ["lib/**", ".eslint-report.json"]
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.node
    },
    plugins: {
      import: importRuleCompatibilityPlugin
    }
  },
  {
    files: ["test/**/*.js", "test-integration/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.mocha
      }
    }
  },
  btrz.configs.all
];
