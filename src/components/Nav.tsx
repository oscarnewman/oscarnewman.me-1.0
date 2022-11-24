import Link from 'next/link'

type Props = {}

function Nav(props: Props) {
  return (
    <nav className="flex justify-start items-center gap-8">
      <Link href="/" className="flex font-bold gap-1">
        <div>🌵</div>
        <div>Oscar Newman</div>
      </Link>
      <div className="flex gap-4 items-baseline">
        <Link href="/" className="text-fg-accent text-sm">
          CV
        </Link>
        <Link href="/articles" className="text-fg-accent text-sm">
          Writing
        </Link>
      </div>
    </nav>
  )
}

export default Nav
