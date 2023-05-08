const packageVersion = require('./package.json').version;

class VersionUtil {
  static getVersion() {
    return packageVersion;
  }
}

module.exports = VersionUtil;