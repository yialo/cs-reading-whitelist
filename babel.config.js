// TODO: add corejs3

module.exports = {
  ignore: ['**/node_modules/**'],
  presets: [
    [
      '@babel/preset-env', {
        loose: false,
        modules: false,
      },
    ],
  ],
};
