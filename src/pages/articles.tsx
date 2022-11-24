import { GetStaticProps } from 'next'
import Link from 'next/link'
import Nav from '~/components/Nav'
import { Article, getAllArticles } from '~/lib/articles'
import { formatDate } from '~/lib/date'

type Props = {
  articles: Article['meta'][]
}

function Article({ article }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="md:grid md:grid-cols-12 md:items-baseline"
    >
      <time className="text-sm text-stone-500 dark:text-stone-400 col-span-3">
        {formatDate(article.date)}
      </time>
      <div className="col-span-9 space-y-2">
        <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
          {article.title}
        </h2>
        <div className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {article.description}
        </div>
        <div className="text-fg-accent text-sm">
          Read more <span className="opacity-50">→</span>
        </div>
      </div>
    </Link>
  )
}

function Articles({ articles }: Props) {
  return (
    <div>
      <div className="max-w-screen-md mx-auto px-6 space-y-12 pt-12">
        <Nav />
        <header className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Notes to self
          </h1>
          <p className="">
            A public notebook of tricks I've learned and solutions I've found.
          </p>
        </header>
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-6 md:space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = await getAllArticles()

  return {
    props: {
      articles: articles.map((a) => {
        return a.meta
      }),
    },
  }
}

export default Articles
