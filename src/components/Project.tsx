import { Link } from './Typography/Link'
import { HSpacer, VSpacer } from './Layout/Spacer'
import { P, Small } from './Typography'

interface Props {
  title: string
  link: string
  description: string
  current?: boolean
  soon?: boolean
  course?: string
}

export const Project: React.SFC<Props> = ({
  title,
  link,
  description,
  current = false,
  soon = false,
  course,
}) => (
  <div>
    <div className="flex items-center">
      <Link to={soon ? '#' : link} external={!soon}>
        {title}
      </Link>
      <HSpacer size={2} />
      {current && (
        <div className="text-xs uppercase font-medium text-fg-accent-boldest tracking-wider bg-fg-accent-weakest px-2 rounded-full">
          Current!
        </div>
      )}
      {soon && (
        <div className="text-xs uppercase font-medium text-fg-accent-boldest tracking-wider bg-fg-accent-weakest px-2 rounded-full">
          Coming Soon
        </div>
      )}
    </div>
    <P>{description}</P>
    {course && (
      <>
        <VSpacer size={1}></VSpacer>
        <Small>{course}</Small>
      </>
    )}
  </div>
)
