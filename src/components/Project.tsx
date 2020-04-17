import { Link } from './Typography/Link'
import { HSpacer } from './Layout/Spacer'
import { P } from './Typography'

interface Props {
  title: string
  link: string
  description: string
  current?: boolean
}

export const Project: React.SFC<Props> = ({
  title,
  link,
  description,
  current = false,
}) => (
  <div>
    <div className="flex items-center">
      <Link to={link} external>
        {title}
      </Link>
      <HSpacer size={2} />
      {current && (
        <div className="text-xs uppercase font-medium text-fg-accent-boldest tracking-wider bg-fg-accent-weakest px-2 rounded-full">
          Current!
        </div>
      )}
    </div>
    <P>{description}</P>
  </div>
)
