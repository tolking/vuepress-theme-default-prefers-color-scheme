---
title: 迁移
---

## 从 v1 迁移

::: tip
当且仅当你在 `v1` 版本中配置了 `defaultTheme` 时，需要了解以下内容
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