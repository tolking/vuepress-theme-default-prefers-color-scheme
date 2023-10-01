:warning: This library is no longer maintained.

It is recommended to use [VitePress](https://github.com/vuejs/vitepress) to build your document, as it supports dark mode by default.

[![License](https://img.shields.io/github/license/tolking/vuepress-theme-default-prefers-color-scheme.svg?style=flat-square&logo=opensourceinitiative)](https://github.com/tolking/vuepress-theme-default-prefers-color-scheme/blob/master/LICENSE)
[![Latest tag via npm](https://img.shields.io/npm/v/vuepress-theme-default-prefers-color-scheme.svg?style=flat-square&logo=npm)](https://npmjs.com/package/vuepress-theme-default-prefers-color-scheme)
[![Latest tag via GitHub](https://img.shields.io/github/v/tag/tolking/vuepress-theme-default-prefers-color-scheme.svg?sort=semver&style=flat-square&logo=github)](https://github.com/tolking/vuepress-theme-default-prefers-color-scheme/tags)

# vuepress-theme-default-prefers-color-scheme

This plugin adds support for *prefers-color-scheme* to the [Vuepress](https://vuepress.vuejs.org) 1.x default theme.

[Live Demo and Documentation](https://tolking.github.io/vuepress-theme-default-prefers-color-scheme)

## Installation

``` sh
yarn add vuepress-theme-default-prefers-color-scheme
# or
npm i vuepress-theme-default-prefers-color-scheme
```

## Usage

``` js
// .vuepress -> config.js
module.exports = {
  theme: 'default-prefers-color-scheme'
}
```

## Options

### overrideTheme (optional)

Force users into a specific theme, ignoring [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

Allowed values:

- `'light' | 'dark'`: Always use the given theme
- `{ light: [beginHours: number, endHours: number], dark: [beginHours: number, endHours: number] }`: Control the time of the day when each theme is used

For example:

``` js
module.exports = {
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    overrideTheme: 'dark',
    // or
    overrideTheme: { light: [6, 18], dark: [18, 6] },
  }
}
```

### prefersTheme (optional)

Use the given theme when the browser does not support prefers-color-scheme but supports CSS Variables

Allowed values:

- `'light' | 'dark'`

For example:

``` js
module.exports = {
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    prefersTheme: 'dark',
  }
}
```

[Theme Config](https://vuepress.vuejs.org/theme/default-theme-config.html)

## Styling

Apply simple color overrides to the styling of the [default preset](https://github.com/tolking/vuepress-theme-default-prefers-color-scheme/blob/master/styles/palette.styl)
in your `.vuepress/styles/palette.styl` file.

Alternatively, set CSS Variables in your `.vuepress/styles/index.styl` file.

**`$accentColor` and `$accentDarkColor` are best changed together**

## Changelog

This project uses semantic versioning and tracks changes in [CHANGELOG](CHANGELOG.md).

## License

[MIT](http://opensource.org/licenses/MIT)
