## Introduction

vuepress-theme-default-prefers-color-scheme is a theme that adds `light` and `dark` themes to the [default theme](https://v1.vuepress.vuejs.org/zh/theme/default-theme-config.html) of vuepress

## How It Works

base on [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) and [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

#### View Support Browsers

- [prefers-color-scheme](https://www.caniuse.com/#search=prefers-color-scheme)
- [CSS Variables](https://www.caniuse.com/#search=CSS%20Variables)

**`prefers-color-scheme` also needs your system support**

- mac Mojave ^10.14
- windows 10 ^1809

**For unsupported browsers, the same style as the default theme will be displayed**

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

### defaultTheme
- Type: `string`, `object`
- Required: `false`

::: tip
By default, light or dark themes are displayed by [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme), You can change it by `defaultTheme`. base on [css-prefers-color-scheme](https://github.com/csstools/css-prefers-color-scheme)
:::

support `light`, `dark` or `{ theme: [begin hours, end hours] }`

``` js {4,6,8}
module.exports = {
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    defaultTheme: 'dark',
    // or
    defaultTheme: { dark: [18, 6] },
    // or
    defaultTheme: { light: [6, 18], dark: [18, 6] },
  },
  // When using `light theme` or `dark theme`, you need to add a postcss plugins to your config.js
  postcss: {
    plugins: [
      require('css-prefers-color-scheme/postcss'),
      require('autoprefixer')
    ]
  }
}
```

[Theme Config](https://v1.vuepress.vuejs.org/theme/default-theme-config.html)

## Styling

To apply simple color overrides to the styling of the [default preset](https://github.com/tolking/vuepress-theme-default-prefers-color-scheme/blob/master/styles/palette.styl), In your `.vuepress/styles/palette.styl` file.

**`$accentColor` and `$accentDarkColor` are best changed together**
