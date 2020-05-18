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
    share: "分享到:",
    text:[
      {
        src:"/images/share85_09.gif",
        text:"盟友圈"
      },
      {
        src: "/images/share85_01.gif",
        text: "新浪微博"
      },
      {
        src: "/images/share85_07.png",
        text: "QQ空间"
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toTop:function(){
      console.log("2");
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    }
  }
})
