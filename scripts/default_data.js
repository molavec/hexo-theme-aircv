/**
 *
 * Title: default_data helper
 * Author: Miguel Olave - https://molavec.com
 * Description:
 * Load default data for template from 'yaml' file.
 * More info: https://hexo.io/api/helper
 *
 */


const fs = require('fs');
const yaml = require('js-yaml');

hexo.extend.helper.register('default_data', (filename) => {

  try {
    let fileContents = fs.readFileSync(__dirname + `/../source/_default_data/${filename}.yaml`, 'utf8');
		return yaml.safeLoad(fileContents);
  } catch (e) {
      console.log(e);
    return null;
  }

});