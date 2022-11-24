import clsx from 'clsx'
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
    <div className="dark:bg-gray-900">
      <div className="flex-1 container py-12 space-y-12">
        <Nav />
        <NextSeo
          title={meta.title}
          openGraph={{
            type: 'article',
            article: {
              authors: ['Oscar Newman'],
              publishedTime: meta.date,
            },
            description: meta.description,
            siteName: 'Oscar Newman',
            url: `https://oscarnewman.me/posts/${meta.slug}`,
            title: meta.title,
          }}
          canonical={`https://oscarnewman.me/posts/${meta.slug}`}
        />
        <article>
          <header className="flex flex-col space-y-4">
            <h1 className="text-4xl font-bold tracking-tight text-stone-800 dark:text-stone-100 sm:text-4xl">
              {meta.title}
            </h1>
            <time
              dateTime={meta.date}
              className="flex items-center text-base text-fg-secondary  "
            >
              <span className="">{formatDate(meta.date)}</span>
            </time>
          </header>
          <div
            className={clsx(
              'prose',
              'dark:prose-invert dark:prose-pre:bg-gray-800 mt-8',
            )}
          >
            {children}
          </div>
        </article>
      </div>
    </div>
  )
}
