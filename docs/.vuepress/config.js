module.exports = {
  base: '/vuepress-theme-default-prefers-color-scheme/',
  title: 'vuepress-theme-default-prefers-color-scheme',
  description: 'add prefers-color-scheme for vuepress default theme',
  dest: 'dist/',
  evergreen: true,
  theme: require.resolve('../../'),
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'en-US',
      title: 'vuepress-theme-default-prefers-color-scheme',
      description: 'add prefers-color-scheme for vuepress default theme'
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'vuepress-theme-default-prefers-color-scheme',
      description: '为 vuepress 的默认主题增加 prefers-color-scheme'
    }
  },
  themeConfig: {
    // defaultTheme: { dark: [19, 6] },
    repo: 'tolking/vuepress-theme-default-prefers-color-scheme',
    docsDir: 'docs',
    editLinks: true,
    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        sidebar: [
          '/'
        ]
      },
      '/zh/': {
        selectText: '选择语言',
        label: '简体中文',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '最后更新时间',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        sidebar: [
          '/zh/'
        ]
      }
    }
  }
  // postcss: {
  //   plugins: [
  //     require('css-prefers-color-scheme/postcss'),
  //     require('autoprefixer')
  //   ]
  // }
}
