module.exports = {
  base: '/vuepress-theme-default-prefers-color-scheme/',
  title: 'vuepress-theme-default-prefers-color-scheme',
  description: 'add prefers-color-scheme for vuepress default theme',
  dest: 'dist/',
  evergreen: true,
  theme: require.resolve('../../'),
  themeConfig: {
    defaultTheme: { dark: [18, 6] },
    sidebar: [
      '/started'
    ]
  },
  postcss: {
    plugins: [
      require('css-prefers-color-scheme/postcss'),
      require('autoprefixer')
    ]
  }
}
