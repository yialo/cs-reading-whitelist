require('dotenv').config();

module.exports = {
  mode: 'development',

  devServer: {
    host: process.env.WDS_HOST,
    port: process.env.WDS_PORT,
    overlay: true,
    writeToDisk: (filePath) => !filePath.match(/\.hot-update\.js(?:on|\.map)?$/),
  },

  devtool: 'source-map',
};
