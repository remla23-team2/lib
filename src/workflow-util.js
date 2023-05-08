const fs = require('fs');
const path = require('path');

class WorkflowUtil {
  static getVersion() {
    const filePath = path.join(__dirname, '..', '.github', 'workflows', 'release.yml');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const versionRegex = /v([0-9]+\.[0-9]+\.[0-9]+)/;
    const match = versionRegex.exec(fileContent);
    if (!match || match.length < 2) {
      throw new Error('Failed to parse workflow version from release.yml');
    }
    return match[1];
  }

  static updateVersion(newVersion) {
    const filePath = path.join(__dirname, '..', '.github', 'workflows', 'release.yml');
    let fileContent = fs.readFileSync(filePath, 'utf8');
    const versionRegex = /v([0-9]+\.[0-9]+\.[0-9]+)/;
    const match = versionRegex.exec(fileContent);
    if (!match || match.length < 2) {
      throw new Error('Failed to parse workflow version from release.yml');
    }
    const oldVersion = match[1];
    fileContent = fileContent.replace(`v${oldVersion}`, `v${newVersion}`);
    fs.writeFileSync(filePath, fileContent);
  }
}

module.exports = WorkflowUtil;