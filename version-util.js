const path = require('path');
const version = require(path.join(__dirname, '..', 'package.json')).version;


class VersionUtil {
  static getVersion() {
    return version;
  }
}

module.exports = VersionUtil;