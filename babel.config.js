"use strict";

module.exports = function (api) {
  api.cache.never();

  const envConfig = {
    modules: 'commonjs',
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
