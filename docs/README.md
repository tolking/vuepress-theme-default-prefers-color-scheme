## Introduction

[`vuepress-theme-default-prefers-color-scheme`](https://github.com/tolking/vuepress-theme-default-prefers-color-scheme) is a theme that adds `light` and `dark` themes to the [default theme](https://vuepress.vuejs.org/theme/default-theme-config.html) of `vuepress`.

## Requirements

### How it works

Based on `prefers-color-scheme` and CSS Variables.

### Supported browsers

- [`prefers-color-scheme`](https://www.caniuse.com/#search=prefers-color-scheme)
- [CSS Variables](https://www.caniuse.com/#search=CSS%20Variables)

**`prefers-color-scheme` also needs your system support.**

- macOS Mojave `^10.14`
- Windows 10 `^1809`

**For unsupported browsers, the same style as the default theme will be displayed.**

## Installation

``` sh
yarn add vuepress-theme-default-prefers-color-scheme
# or
npm i vuepress-theme-default-prefers-color-scheme
```

## Usage

``` js {3}
// .vuepress -> config.js
module.exports = {
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    // ...
  }
}
```

## Options

### `overrideTheme` (optional)

Force users into a specific theme, ignoring [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

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

### `prefersTheme` (optional)

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

To apply simple color overrides to the styling of the [default preset](https://github.com/tolking/vuepress-theme-default-prefers-color-scheme/blob/master/styles/palette.styl) in your `.vuepress/styles/palette.styl` file.
Or set CSS Variables in your `.vuepress/styles/index.styl` file.

**`$accentColor` and `$accentDarkColor` are best changed together.**
