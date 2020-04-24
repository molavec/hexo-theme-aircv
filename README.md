# aircv Hexo Theme

This is Hexo Theme with a beautiful style design form [KeenThemes](http://www.keenthemes.com/).
Is very usefull for personal branding.

![model for landing in devices](doc/aircv.png)

## Install

**1.- Copy aircv in your theme folder**
```
\themes
  \aircv
  \landscape
```

**2.- Install `hexo-renderer-scss` to add scss support**
```bash
$ npm install hexo-renderer-scss
```

**3.- Config theme in `_config.yml`**
```yaml
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: aircv
```

**4.- Config theme in `_config.yml`**
4.- Run local server
```bash
$ hexo server
```
**5.- Customize content (see below)**


## Customize your new site

It is  a "one page" landing with well defined section.

You can configure content of every adding yaml files for every section `/source/_data` directory follow yaml example files in `themes/aircv/source/default_data`.

Follow these steps:

**1.- Copy `default_data yaml files` to `source\_data`.**

```bash
$ for file in themes/aircv/source/default_data/*.yaml; do cp "$file" source/_data ;done
```

**2.- Modify every Yaml file as your convenience.**

**3.- Be Happy and share!!**

