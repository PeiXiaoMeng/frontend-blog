import { defineConfig } from 'vitepress'
import { nav } from "./bars/nav";
import { sidebar } from "./bars/sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/frontend/",
  title: "前端笔记",
  description: "A VitePress Site",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/logo.ico'}]
  ],
  themeConfig: {
    siteTitle: "",
    logo: "/user.png",
    lastUpdatedText: "最后更新时间",
    search: {
      provider: 'local'
    },
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/PeiXiaoMeng/frontend-blog' }
    ],
    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © 2022-${new Date().getFullYear()} 裴晓梦`,
    },
  }
})
