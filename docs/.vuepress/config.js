module.exports = {
  title: '文档',
  description: '开发文档,持续更新中....',
  themeConfig: {
    sidebarDepth: 1,
    lastUpdated: '上次更新',
    repo: 'https://github.com/xxx',
    repoLabel: '查看源码',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我们改善此页面！',
    nav: [
      {
        text: '文档',
        link: '/guide/',
      },
      {
        text: '前端',
        link: '/guide/frontend'
      },
      {
        text: '更新日志',
        link: '/guide/logs'
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: '文档',
          collapsable: false,
          sidebarDepth: 2,
          children: [
            '',
            'frontend',
            'logs',
          ]
        }
      ],
    }
  },
}