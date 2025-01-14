// docs/.vuepress/config.js

module.exports = {
//   host: "0.0.0.0", // 生成网页地址（本地调试使用）
//   port: "22333", // 生成网页端口（本地调试使用）
  
//   baseURL: "/unsafe/v/",
  title: "Tsanfer's Blog", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: "现居住于猎户臂上的一个碳基生命", // meta 中的描述文字，用于SEO
  head: [
    ["link", { rel: "icon", href: "/favicon.svg" }], //浏览器的标签栏的网页图标,基地址/docs/.vuepress/public
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ], //在移动端，搜索框在获得焦点时会放大
  ],
  theme: "reco", //选择主题‘reco’
  themeConfig: {
    type: "blog", //选择类型博客
    fullscreen: true,
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "分类", // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签", // 默认 “标签”
      },
      socialLinks: [
        { icon: "reco-github", link: "https://github.com/Tsanfer" },
        { icon: "reco-bilibili", link: "https://space.bilibili.com/12167681" },
        { icon: "reco-qq", link: "tencent://message/?uin=1124851454" },
        { icon: "reco-twitter", link: "https://twitter.com/a1124851454" },
        { icon: "reco-mail", link: "mailto:a1124851454@gmail.com" },
      ],
    },
    nav: [
      //导航栏设置
      { text: "主页", link: "/", icon: "reco-home" },
      {
        text: "工具",
        icon: "reco-api",
        items: [
          {
            text: "个人网盘",
            link: "http://clouddisk.tsanfer.com:8080",
            icon: "fa-hdd",
          },
          {
            text: "订阅转换器",
            link: "http://clouddisk.tsanfer.com:58080",
            icon: "fa-exchange-alt",
          },
          {
            text: "目标检测",
            link: "http://hpc.tsanfer.com:8000",
            icon: "fa-object-ungroup",
          },
        ],
      },
      {
        text: "联系",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/Tsanfer",
            icon: "reco-github",
          },
          {
            text: "CSDN",
            link: "https://blog.csdn.net/qq_27961843/",
            icon: "reco-csdn",
          },
          {
            text: "BiliBili",
            link: "https://space.bilibili.com/12167681",
            icon: "reco-bilibili",
          },
          {
            text: "QQ",
            link: "tencent://message/?uin=1124851454",
            icon: "reco-qq",
          },
          {
            text: "Twitter",
            link: "https://twitter.com/a1124851454",
            icon: "reco-twitter",
          },
          {
            text: "Gmail",
            link: "mailto:a1124851454@gmail.com",
            icon: "reco-mail",
          },
        ],
      },
    ],
    sidebar: {
      "/views/frontEnd/": [
        {
          title: "前端", // 必要的
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "vuepress_theme_reco-Github_Actions",
            "VuePress_GithubPages_TravisCI",
            "Sphinx_GitHub_ReadtheDocs",
          ],
        },
      ],
      "/views/MCU/": [
        {
          title: "MCU", // 必要的
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "Linux_board_NFS",
            "First_Prepare_for_Lanqiao_Cup_MCU_Competition",
          ],
        },
      ],
      "/views/Computer/": [
        {
          title: "计算机", // 必要的
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "Storage_hardware",
            "Windows_WSL_terminal_WebDAV_PartitionBackup"
          ],
        },
      ],
      "/views/Tool/": [
        {
          title: "工具", // 必要的
          sidebarDepth: 2, // 可选的, 默认值是 1
          children: [
            "ffmpeg",
            "scrcpy",
            "Frp_Docker_SSH_RDP"
          ],
        },
      ],
    },
    // displayAllHeaders: true, // 默认值：false
    subSidebar: "auto",

    record: "蜀ICP备20005033号-2",
    recordLink: "https://beian.miit.gov.cn/",
    cyberSecurityRecord: "川公网安备 51110202000301号",
    cyberSecurityLink:
      "http://www.beian.gov.cn/",
    startYear: "2020", // 项目开始时间，只填写年份
    lastUpdated: "最后更新时间", // string | boolean
    author: "Tsanfer",
    authorAvatar: "/avatar.svg", //作者头像
    mode: "light", //默认显示白天模式
    codeTheme: "okaidia", // default 'tomorrow'
    smooth: "true", //平滑滚动
    // 评论设置
    valineConfig: {
      appId: process.env.LEANCLOUD_APP_ID,
      appKey: process.env.LEANCLOUD_APP_KEY,
    },
  },
  markdown: {
    lineNumbers: true, //代码显示行号
  }, // 搜索设置
  search: true,
  searchMaxSuggestions: 10, // 插件
  plugins: [
    [
      "meting",
      {
        // metingApi: "https://meting.sigure.xyz/api/music",
        meting: {
          server: "netease",
          type: "playlist",
          mid: "2880512563",
        },
        aplayer: {
          lrcType: 3,
          theme: "#3489fd",
        },
      },
    ],
    [
      "@vuepress-reco/vuepress-plugin-rss", //RSS插件
      {
        site_url: "https://tsanfer.com", //网站地址
        copyright: "Tsanfer", //版权署名
      },
    ],
    ["flowchart"], // 支持流程图
    ["@vuepress/nprogress"], // 加载进度条
    ["reading-progress"], // 阅读进度条
    ["vuepress-plugin-code-copy", true], //一键复制代码插件
  ],
};
