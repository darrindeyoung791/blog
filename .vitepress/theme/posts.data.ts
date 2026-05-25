import { createContentLoader } from 'vitepress'
import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

interface Post {
  title: string
  url: string
  date: { time: number; string: string }
  author: string | undefined
  lastEditTime: { time: number; string: string } | undefined
  firstEditTime: { time: number; string: string } | undefined
  frontmatter: Record<string, any>
}

declare const data: Post[]
export { data }

function extractExcerpt(filePath: string): string | undefined {
  try {
    const content = fs.readFileSync(filePath, 'utf-8')
    const body = content.replace(/---[\s\S]*?---/, '').trim()
    const paragraphs = body.match(/^(?!\s*#)[^\n]+/m)
    if (paragraphs) {
      const text = paragraphs[0].trim()
      return text.length > 200 ? text.slice(0, 200) + '…' : text
    }
  } catch {}
  return undefined
}

export default createContentLoader('posts/*.md', {
  transform(raw): Post[] {
    const posts = raw.map(({ url, frontmatter }) => {
      // normalize tags in frontmatter to simple trimmed strings
      try {
        if (Array.isArray(frontmatter.tags)) {
          frontmatter.tags = frontmatter.tags.map((t: any) => {
            if (t == null) return t
            let s = String(t)
            try { if (/%[0-9A-Fa-f]{2}/.test(s)) s = decodeURIComponent(s) } catch {}
            return s.trim()
          })
        }
      } catch {}
      let lastEditTime: Post['lastEditTime'] = undefined
      let firstEditTime: Post['firstEditTime'] = undefined
      try {
        const filePath = path.resolve('docs' + url + '.md')
        const lastDate = execSync(
          `git log -1 --format="%ai" -- "${filePath}"`,
          { encoding: 'utf-8', timeout: 5000 }
        ).trim()
        if (lastDate) lastEditTime = formatDate(lastDate)
        const firstDate = execSync(
          `git log --reverse --format="%ai" -- "${filePath}"`,
          { encoding: 'utf-8', timeout: 5000 }
        ).trim().split('\n')[0]
        if (firstDate) firstEditTime = formatDate(firstDate)
      } catch {}
      frontmatter.excerpt = extractExcerpt(path.resolve('docs' + url + '.md'))
      return {
        title: frontmatter.title,
        url,
        author: frontmatter.author,
        date: formatDate(frontmatter.date),
        lastEditTime,
        firstEditTime,
        frontmatter,
      }
    })
    return posts.sort((a, b) => {
      if (a.frontmatter.sticky && !b.frontmatter.sticky) return -1
      if (!a.frontmatter.sticky && b.frontmatter.sticky) return 1
      return b.date.time - a.date.time
    })
  }
})

function formatDate(raw: string): Post['date'] {
  const date = new Date(raw)
  date.setUTCHours(12)
  return {
    time: +date,
    string: date.toLocaleDateString('en-US', {
      year: 'numeric', month: 'long', day: 'numeric'
    })
  }
}
