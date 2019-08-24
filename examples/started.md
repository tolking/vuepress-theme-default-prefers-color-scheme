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
- Default: `undefined`
- Required: `false`

::: tip
By default, light or dark themes are displayed by [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme), You can change it by `defaultTheme`
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
