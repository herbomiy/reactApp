const env = process.env.NODE_ENV.replace(/(\s*$)|(^\s*)/ig,"");
const config = require(`./config/webpack.${env}.config.js`)(env);

module.exports = config;