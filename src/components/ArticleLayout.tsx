import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'
import Nav from '~/components/Nav'
import { Article } from '~/lib/articles'
import { formatDate } from '~/lib/date'

type Props = {
  children: ReactNode
  meta: Article['meta']
}

export function ArticleLayout({ children, meta }: Props) {
  return (
    <div>
      <Nav />

      <div className="flex-1 container py-12">
        <NextSeo
          title={meta.title}
          openGraph={{
            type: 'article',
            article: {
              authors: ['Oscar Newman'],
              publishedTime: meta.date,
            },
            siteName: 'Oscar Newman',
            url: `https://oscarnewman.me/posts/${meta.slug}`,
            title: meta.title,
          }}
          canonical={`https://oscarnewman.me/posts/${meta.slug}`}
        />
        <article>
          <header className="flex flex-col">
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {meta.title}
            </h1>
            <time
              dateTime={meta.date}
              className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
            >
              <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
              <span className="ml-3">{formatDate(meta.date)}</span>
            </time>
          </header>
          <div className="prose dark:prose-invert mt-8">{children}</div>
        </article>
      </div>
    </div>
  )
}
