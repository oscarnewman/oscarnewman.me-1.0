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
    <div className="bg-amber-50/50 dark:bg-stone-900 text-amber-900 dark:text-amber-100">
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
          <header className="flex flex-col space-y-4">
            <h1 className="font-serif text-4xl font-bold tracking-tight text-stone-800 dark:text-stone-100 sm:text-4xl">
              {meta.title}
            </h1>
            <time
              dateTime={meta.date}
              className="flex items-center text-base text-amber-900 dark:text-stone-500"
            >
              <span className="">{formatDate(meta.date)}</span>
            </time>
          </header>
          <div
            className={clsx(
              'prose text-amber-900',
              ' prose-code:text-amber-900 prose-pre:bg-stone-900',
              'dark:text-amber-100 dark:prose-code:text-amber-300 dark:prose-pre:bg-black',
              'font-serif dark:prose-invert mt-8',
            )}
          >
            {children}
          </div>
        </article>
      </div>
    </div>
  )
}
