import { createContentLoader } from 'vitepress'
import { execSync } from 'node:child_process'
import path from 'node:path'

interface Post {
  title: string
  url: string
  date: { time: number; string: string }
  author: string | undefined
  lastEditTime: { time: number; string: string } | undefined
  excerpt: string | undefined
}

declare const data: Post[]
export { data }

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw): Post[] {
    const posts = raw.map(({ url, frontmatter, excerpt }) => {
      let lastEditTime: Post['lastEditTime'] = undefined
      try {
        const filePath = path.resolve('docs' + url + '.md')
        const gitDate = execSync(
          `git log -1 --format="%ai" -- "${filePath}"`,
          { encoding: 'utf-8', timeout: 5000 }
        ).trim()
        if (gitDate) lastEditTime = formatDate(gitDate)
      } catch {}

      return {
        title: frontmatter.title,
        url,
        author: frontmatter.author,
        date: formatDate(frontmatter.date),
        lastEditTime,
        excerpt
      }
    })
    return posts.sort((a, b) => b.date.time - a.date.time)
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
