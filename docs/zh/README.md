## 介绍

vuepress-theme-default-prefers-color-scheme 是一款为 [vuepress 默认主题](https://vuepress.vuejs.org/zh/theme/default-theme-config.html) 增加 `浅色` 与 `深色` 主题的一款主题

## 原理

主要是基于下一代 css 技术中的 prefers-color-scheme 与 CSS Variables 实现。

#### 查看支持浏览器

- [prefers-color-scheme](https://www.caniuse.com/#search=prefers-color-scheme)
- [CSS Variables](https://www.caniuse.com/#search=CSS%20Variables)

**对于 `prefers-color-scheme` 还需要你的操作系统支持切换浅色与深色模式**

- mac Mojave ^10.14
- windows 10 ^1809

**对于都不支持的浏览器将显示与默认主题几乎相同的样式**

## 安装

``` sh
yarn add vuepress-theme-default-prefers-color-scheme
# or
npm i vuepress-theme-default-prefers-color-scheme
```

## 使用

``` js {3}
// .vuepress -> config.js
module.exports = {
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    // ...
  }
}
```

## 配置

### overrideTheme (可选)

强迫用户进入特定主题，忽略 [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) 值

允许值:

- `'light' | 'dark'`: 始终显示当前值
- `{ light: [beginHours: number, endHours: number], dark: [beginHours: number, endHours: number] }`: 通过一天中的不同时间来控制显示的值

例如:

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

### prefersTheme (可选)

指定浏览器在不支持 prefers-color-scheme 但支持 CSS Variables 时，显示的主题

允许值:

- `'light' | 'dark'`

例如:

``` js
module.exports = {
  theme: 'default-prefers-color-scheme',
  themeConfig: {
    prefersTheme: 'dark',
  }
}
```

其它配置与 [官方主题配置](https://vuepress.vuejs.org/theme/default-theme-config.html) 相同

## 样式

在 `.vuepress/styles/palette.styl` 文件里你可以对 [默认预设的样式](https://github.com/tolking/vuepress-theme-default-prefers-color-scheme/blob/master/styles/palette.styl) 应用简单的颜色替换，或者直接在 `.vuepress/styles/index.styl` 里面直接设置css变量

**`$accentColor` 和 `$accentDarkColor` 最好被一起更改**
