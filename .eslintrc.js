const config = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: ["next", "next/core-web-vitals"], 
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: "module",
    },
    plugins: ["react"],
    rules: {
      "react/no-unescaped-entities": "off",
    },
  };
  
  module.exports = config;
  