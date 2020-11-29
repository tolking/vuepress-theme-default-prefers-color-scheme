# Changelog

## 2.0.0

- rename `defaultTheme` to `overrideTheme` and clarify it overrules and ignores [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)

## 1.1.2

- fix typo

## 1.1.1

- adjust color matching
- fix the `code-group` and `code-block` styles on vuepress 1.6.0

## 1.1.0

- remove `css-prefers-color-scheme`
- refactor `defaultTheme`

```
defaultTheme: null -> <html>
defaultTheme: 'light' -> <html theme="light">
defaultTheme: 'dark' -> <html theme="dark">
```

## 1.0.9

- fix styles

## 1.0.8

- add variables

## 1.0.7

- uniform code style
- fix typo

## 1.0.6

- fix styles on pwa

## 1.0.5

- fix styles on vuepress 1.3.0

## 1.0.4

- fix navigation border color for dark theme

## 1.0.3

- fix styles on vuepress 1.2.0

## 1.0.2

- fix styles

## 1.0.1

- Add `defaultTheme` to control default theme color
