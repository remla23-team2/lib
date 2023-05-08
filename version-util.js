const version = '1.0.3';

class VersionUtil {
  static getVersion() {
    return version;
  }
}
console.log(VersionUtil.getVersion());

module.exports = VersionUtil;
