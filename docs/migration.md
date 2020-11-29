---
title: Migration
---

## Migration from v1

::: tip
If and only if you have configured `defaultTheme` in the `v1` version, you need to know this
:::

``` js
module.exports = {
  theme: 'default-prefers-color-scheme',
  themeConfig: {
-   defaultTheme: 'dark',
+   overrideTheme: 'dark',
  },
- postcss: {
-   plugins: [
-     require('css-prefers-color-scheme/postcss'),
-     require('autoprefixer')
-   ]
- }
}
```