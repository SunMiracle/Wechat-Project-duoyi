//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    title: '产品列表',
    /* 首页的产品立标按钮切换 */
    switchShowIndex: 0,
    buttonText:[
      '官方网站','安卓版下载','ios版下载'
    ],
    indexSwitch:[
      {
        title: '手游产品',
        contentShow: true,
        content:[
          {
            banner: "/images/sw4sy.jpg",
            title: "神武4手游",
            subtitle: "快乐社交回合手游",
            content: "《神武4》手游是多益网络基于经典IP神武打造的全新回合制网游，继承了神武系列产品的核心玩法和快乐社交的游戏理念，并拥有全新的美术资源和游戏玩法。",
            button:[
              {
                text: "官方网站"
              },
              {
                text: "安卓版下载"
              },
              {
                text: "ios版下载"
              }
            ]
          },
          {
            banner: "/images/jz.jpg",
            title: "九州劫",
            subtitle: "沙盘战争策略手游",
            content: "《九州劫》是一款以“三国群雄”为背景的沙盘战争策略手游，开创“个人剧情+大阵营PK地图”双模式玩法。游戏以“好玩的深度策略”为研发理念，还原经典战役，包含丰富的武将组合、千变万化的战斗技能、特殊地形建筑，搭配出奥妙无穷的战术玩法。玩家通过收集名将、招兵买马、运筹帷幄，主导三国历史风云！",
            button: [
              {
                text: "官方网站"
              },
              {
                text: "安卓版下载"
              },
              {
                text: "ios版下载"
              }
            ]
          },
          {
            banner: "/images/dwsy.jpg",
            title: "《梦想帝王手游》",
            subtitle: "自由战争策略手游",
            content: "《梦想帝王手游》是多益网络旗下最新研发的一款自由战争策略手游，传承自经典IP梦想帝王。历朝名将随你征战沙场，历代美女陪你坐观天下。游戏拥有极其丰富的策略玩法，数十种君主技能、数百位名将、多种武将技能搭配、34类兵种、36种计谋，相生相克变化无穷，绝对是名副其实的战争之王。",
            button: [
              {
                text: "官方网站"
              },
              {
                text: "安卓版下载"
              },
              {
                text: "ios版下载"
              }
            ]
          }
        ]
      },
      {
        title: '端游产品',
        contentShow: false,
        content: [
          {
            banner: "/images/sw4-1.jpg",
            title: "神武4",
            subtitle: "快乐免费回合制",
            content: "有事没事，玩神武4！《神武4》是多益网络2020年推出的全新快乐社交网游。化身为十三门派精英，纵横三界，足不出户结交四海好友；有爱萌宠养成+公平经济系统+策略战斗玩法，感受回合竞技赛事带来的无限魅力；百种创意回合制玩法自由选择，组队、帮派、结拜、结婚等多元社交形式，体验更有温度和幸福感的社交氛围。"
          },
          {
            banner: "/images/mx.jpg",
            title: "新梦想世界",
            subtitle: "国风武侠回合战斗网游",
            content: "《新梦想世界》，国风武侠回合战斗网游，十二年经典回合IP，以主修辅修双流派的强大招式体系，继承见招拆招、相生相克的策略战斗特色；同时打造深度游戏世界观，全新美术升级，明月如初，国风新起，这一次，江湖等你缔结侠缘！",
            button: [
              {
                text: "官方网站"
              },
              {
                text: "官方论坛"
              }
            ]
          }
        ]
      },
      {
        title: '互联网产品',
        contentShow: false,
        content: [
          {
            banner: "/images/dygame.jpg",
            title: "多益战盟",
            subtitle: "一站式畅玩多益游戏",
            content: "多益战盟，是多益网络最新推出的游戏平台，提供便捷的游戏下载管理以及社区交流服务，让你一站式畅玩多益游戏！",
            button: [
              {
                text: "官方网站"
              },
              {
                text: "客户端下载"
              }
            ]
          },
          {
            banner: "/images/2980.jpg",
            title: "2980邮箱",
            subtitle: "让我们的心更近",
            content: "2980邮箱立志于打造最专业的邮箱，为用户提供安全稳定，值得信赖的服务。",
            button: [
              {
                text: "进入邮箱"
              },
              {
                text: "App下载"
              },
              {
                text: "官方论坛"
              }
            ]
          }
        ]
      }
    ],
    detail: [
      {
        title: '手游产品',
      }
    ],
    activity: "热门活动",
    activityBanner: [
      "/images/50fcdfd03ffb4237b12ae12a943fb93c.jpg",
      "/images/73b5c562831a4d53a81eb1b368f374a1.jpg",
      "/images/c3abd54878ea46adbe877369cb0a48f1.jpg",
      "/images/351d64e6d7524a8a87c6043803d36398.jpg"
      ]
  },
  //事件处理函数
  tabActive:function(event) {
    this.setData({
      switchShowIndex: event.currentTarget.dataset.switchindex
    });
  }
})
