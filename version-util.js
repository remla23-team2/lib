const version = require('./package.json').version;


class VersionUtil {
  static getVersion() {
    return version;
  }
}

module.exports = VersionUtil;