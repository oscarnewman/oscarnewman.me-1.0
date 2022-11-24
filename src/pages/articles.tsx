import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Card } from '~/components/Card'
import { Container } from '~/components/Container'
import Nav from '~/components/Nav'
import { Article, getAllArticles } from '~/lib/articles'
import { formatDate as formatDate } from '~/lib/date'

type Props = {
  articles: Article['meta'][]
}

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

function Articles({ articles }: Props) {
  return (
    <div>
      <Nav />

      <div className="container">
        <header className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Things I write
          </h1>
          <p className="">
            A collection of guides on how to do things I've figured out, mostly
            written to make up for my own poor memory.
          </p>
        </header>
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
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
