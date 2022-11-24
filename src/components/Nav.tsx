import Link from 'next/link'
import { ModeToggle } from '~/components/ModeToggle'

type Props = {}

function Nav(props: Props) {
  return (
    <nav className="flex justify-between">
      <Link href="/" className="flex font-bold gap-1">
        <div>🌵</div>
        <div>Oscar Newman</div>
      </Link>
    </nav>
  )
}

export default Nav
