// What is this file for? 
// https://github.com/janeasystems/nodejs-mobile-react-native/tree/ed727edea17e8a9e1a85cef3413becc83b8a0328#duplicate-module-name
// Amplify produces a #current-cloud-backend folder inside /amplify, this is essentially a copy of /amplify/backend and react-native
// was complaining that there was a naming collision of npm packages, as we had the same package.json duplicated in both places.
const blacklist = require('metro-config/src/defaults/blacklist');

module.exports = {
  resolver:{
    blacklistRE: blacklist([
      /amplify\/.*/,
    ])
  },
};
