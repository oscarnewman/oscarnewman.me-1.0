import { readFileSync } from 'fs'
import { parseISO, format, formatRelative, intlFormat } from 'date-fns'
import { GetStaticProps } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import Link from 'next/link'
import { join } from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import { postFilePaths } from '~/util/mdx'
import { NextSeo } from 'next-seo'

type Props = {
  source: MDXRemoteSerializeResult
  frontMatter: any
}

function Post({ source, frontMatter }: Props) {
  return (
    <div className="max-w-screen-sm mx-auto py-12 space-y-12 px-6">
      <NextSeo
        title={frontMatter.title}
        openGraph={{
          type: 'article',
          article: {
            authors: ['Oscar Newman'],
            publishedTime: frontMatter.date,
          },
          siteName: 'Oscar Newman',
          url: `https://oscarnewman.me/posts/${frontMatter.slug}`,
          title: frontMatter.title,
        }}
        canonical={`https://oscarnewman.me/posts/${frontMatter.slug}`}
      />
      <nav>
        <Link href="/" className="flex font-bold gap-1">
          <div>🌵</div>
          <div>Oscar Newman</div>
        </Link>
      </nav>
      <div className="prose dark:prose-invert">
        <h1>{frontMatter.title}</h1>
        <p className="text-fg-secondary">
          {intlFormat(parseISO(frontMatter.date), {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            weekday: 'long',
          })}
        </p>
        {source && <MDXRemote {...source} components={{}} />}
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params

  // get post from `/posts` folder
  const path = join(process.cwd(), 'posts', `${slug}.mdx`)
  const fileContents = readFileSync(path, 'utf8')

  // use gray-matter to parse the post metadata section

  const mdxSource = await serialize(fileContents, {
    // Optionally pass remark/rehype plugins
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  })

  // console.log(mdxSource.)

  return {
    props: {
      source: mdxSource,
      frontMatter: mdxSource.frontmatter,
    },
  }
}

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => path.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }))
  return {
    paths: paths,
    fallback: false,
  }
}

export default Post
