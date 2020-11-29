// 配置
window.Config = {

  // 站点名
  SiteName: 'IKS.MOE 页面状态',

  // 站点链接
  SiteUrl: 'https://kukisa.github.io/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm786519726-88320683fce23f89614ea48d',
    'm786519728-f82dfeccebba87934daaec4e',
    'm786519733-683d07cdde0559d2fbdc1c03',
    'm786519736-7ccce7e0e27fa907301c7f33',
    'm786519741-465fa704d35558f439e1aabf',    
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '服务器运行状况监测',
      url: 'https://status.iks.moe/'
    },
    {
      text: '首页',
      url: 'https://iks.moe/'
    },
    {
      text: '关于',
      url: 'https://blog.iks.moe/about-me.html'
    }
  ]
};
