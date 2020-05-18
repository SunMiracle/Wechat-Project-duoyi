// pages/nav/nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    headerImage: '/images/logo_mtop.png',
    headerTab: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '新闻中心',
        link: '/news'
      },
      {
        text: '校园招聘',
        link: 'Recruiting'
      },
      {
        text: '关于多益',
        link: 'about'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
