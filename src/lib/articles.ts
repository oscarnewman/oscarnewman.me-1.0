import glob from 'fast-glob'
import { join } from 'path'

export type Article = {
  meta: {
    slug: string
    date: string
    title: string
    description: string
  }
  component: any
}
export type ArticleMeta = Article['meta']

function pathToArticlesDir() {
  return join(process.cwd(), 'src/pages/articles')
}

async function importArticle(articleFilename): Promise<Article> {
  let { meta, default: component } = await import(
    `../pages/articles/${articleFilename}`
  )
  return {
    meta: { slug: articleFilename.replace(/(\/index)?\.mdx$/, ''), ...meta },
    component,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: pathToArticlesDir(),
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  return articles.sort(
    (a, z) => new Date(z.meta.date).getDate() - new Date(a.meta.date).getDate(),
  )
}
