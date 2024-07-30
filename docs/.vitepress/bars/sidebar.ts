import type { DefaultTheme } from "vitepress";

/**
 * 侧边栏模块
 *
 * 详情参考：https://vitepress.vuejs.org/guide/theme-sidebar
 */
export const sidebar = 
{
  "/Utils/": {
    base: "/Utils/",
    items: Utils(),
  },
  "/React/": {
    base: "/React/",
    items: React(),
  },
  "/English/": {
    base: "/English/",
    items: English(),
  },
  "/Leetcode/": {
    base: "/Leetcode/",
    items: Leetcode(),
  },
};

function Utils(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '介绍',
      items: [
        { text: '通用类型判断', link: '/typeof' },
        { text: '精度运算', link: '/math-fns' },
        { text: '对象扩展方法', link: '/obj-fns' },
        { text: '数组扩展方法', link: '/arr-fns' },
      ]
    }
  ];
}

function React(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '介绍',
      items: [
        { text: '倒计时功能', link: '/倒计时功能' },
      ]
    }
  ];
}

function English(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '介绍',
      items: [
        { text: '英语口语导读学习', link: '/base' },
        { text: '课程1: 花式交谈技巧', link: '/course1' },
      ]
    }
  ];
}

function Leetcode(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '介绍',
      items: [
        { text: '题目1: 算法query', link: '/code1' },
      ]
    }
  ];
}