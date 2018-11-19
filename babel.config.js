"use strict";

module.exports = function (api) {
  api.cache.never();

  const envConfig = {
    targets: {
      node: true,
    },
  };

  return {
    presets: [
      [
        '@babel/preset-env',
        envConfig,
      ],
    ],
  };
};
