import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/blog/',
  srcDir: 'docs',
  title: 'Darrin\'s Blog',
  description: 'A VitePress blog',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.png' }],
    // Robust fix for GH Pages: handle combined `rel="preload stylesheet"`,
    // split `rel=preload as=style` (without onload), and stray `as` on stylesheet links.
    ['script', {}, `(() => {
      try {
        // Handle combined rel="preload stylesheet"
        const combo = Array.from(document.querySelectorAll('link[rel="preload stylesheet"]'));
        for (const l of combo) {
          l.rel = 'preload';
          l.as = 'style';
          l.onload = function() { this.rel = 'stylesheet'; };
        }

        // Handle split case: preload link for CSS that may lack onload; ensure stylesheet is applied
        const preloads = Array.from(document.querySelectorAll('link[rel="preload"][as="style"]'));
        for (const l of preloads) {
          const href = l.getAttribute('href');
          if (!l.onload) {
            l.onload = function() { this.rel = 'stylesheet'; };
          }
          // If there's no corresponding stylesheet link (some hosts may split and NOT add it), create one
          if (href) {
            const hasSheet = document.querySelector('link[rel="stylesheet"][href="' + href + '"]');
            if (!hasSheet) {
              const nl = document.createElement('link');
              nl.rel = 'stylesheet';
              nl.href = href;
              document.head.appendChild(nl);
            }
          }
        }

        // Clean up: remove invalid 'as' attributes from stylesheet links
        const badSheets = Array.from(document.querySelectorAll('link[rel="stylesheet"][as]'));
        for (const s of badSheets) s.removeAttribute('as');
      } catch (e) { /* ignore */ }
    })()`]
  ],
  themeConfig: {
    logo: '/img/favicon.png',
    
    nav: [
      { text: '关于', link: '/about' },
    ],

    search: {
      provider: 'local',
      options: {
        detailedView: true,
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/darrindeyoung791/blog' }
    ],

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }
    },

    footer: {
      message: '如无特殊说明，本站全部内容在 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en" target="_blank" rel="noopener">CC-BY-SA 4.0</a> 协议之条款下提供',
      copyright: 'Copyright © 2026-present darrindeyoung791'
    },

    returnToTopLabel: '回到顶部',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    outline: {
      label: '本文目录'
    },

    sidebarMenuLabel: '文档目录',

    darkModeSwitchLabel: '主题',

    lightModeSwitchTitle: '切换到浅色模式',

    darkModeSwitchTitle: '切换到深色模式',
  }
})
