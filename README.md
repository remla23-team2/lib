# lib
This repository contains a version-aware library, i.e., the library can be asked for its version, for example, to include it in log messages or data records. The library may also contain other logic.

We also create a simple test file to test the package's version during release.

## Some notes
If a new version is going to be released, remember to change the testing version in test file ```version-util.test.js```:
```
expect(VersionUtil.getVersion()).toBe('an old version');
```

Then 
```
git add . 
git commit -m new_updates
git push origin main
git tag a_new_version 
git push --tags
```
while ```a_new_version``` shouldn’t duplicate the previous versions, and should align with the one updated in the test file. 

At last, don’t forget to ```git pull origin main```, as in the remote docker container, one change has been pushed to GitHub (defined in ```release.yml```). So we need to pull the commits firstly. In case in the future new changes are made and conflicts would be introduced.

Then, you'll be able to find the newly released ```lib``` package in our [organization packages](https://github.com/orgs/remla23-team2/packages). Besides, unless it's necessary, we usually don't push new tags or update the version.
