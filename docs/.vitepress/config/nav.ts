import DefaultTheme from 'vitepress/theme'

export const nav: DefaultTheme.Config['nav'] = [
  {
    text: '我的分类',
    items: [
      { text: 'Bug万象集', link: '/categories/issues/index', activeMatch: '/categories/issues/' },
      { text: '"杂碎"逆袭史', link: '/categories/fragments/index', activeMatch: '/categories/fragments/' },
      { text: '方案春秋志', link: '/categories/solutions/index', activeMatch: '/categories/solutions/' },
      { text: '碎碎念', link: '/categories/essays/index', activeMatch: '/categories/essays/' }
    ],
    activeMatch: '/categories/'
  },
  {
    text: '我的小册',
    items: [
      { text: 'Java基础快速入门', link: '/courses/java/index', activeMatch: '/courses/java/' },
      { text: 'MyBatis快速入门', link: '/courses/mybatis/index', activeMatch: '/courses/mybatis/' },
      { text: 'Spring快速入门', link: '/courses/mybatis/index', activeMatch: '/courses/mybatis/' }
    ],
    activeMatch: '/courses/'
  },
  {
    text: '我的标签',
    link: '/tags',
    activeMatch: '/tags'
  },
  {
    text: '我的归档',
    link: '/archives',
    activeMatch: '/archives'
  },
  {
    text: '关于',
    items: [
      { text: '关于知识库', link: '/about/index', activeMatch: '/about/index.html' },
      { text: '关于我', link: '/about/me', activeMatch: '/about/me.html' }
    ],
    activeMatch: '/about/' // // 当前页面处于匹配路径下时, 对应导航菜单将突出显示
  }
]