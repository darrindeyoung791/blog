import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'docs',
  title: 'Blog from darrindeyoung791 ',
  description: 'A VitePress blog',
  cleanUrls: true,
  themeConfig: {
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
  }
})
