/**
 *
 * Title: defaultData helper
 * Author: Miguel Olave - https://molavec.com
 * Description:
 * calculate dimensions of images. Usefull to Open Graph Metadata.
 * More info: https://hexo.io/api/helper
 *
 */

const fs = require('fs');
const imageInfo = require('imageinfo');

hexo.extend.helper.register('imageInfo', (filename, prefixPath = "source") => {

  const imagePath = __dirname + `/../../../${prefixPath}/${filename}`;

  try {
    let image = fs.readFileSync(imagePath);
    return imageInfo(image);
  } catch (e) {
    console.warn(`---\nWARN: Image not found:\n${imagePath}\nUse 'npm -i --save hexo-filter-responsive-images' and type 'hexo generate' again to get responsive images.\n---`);
    return null;
  }

});