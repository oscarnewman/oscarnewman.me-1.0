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
    <div className="flex flex-col md:flex-row md:items-center">
      <div className="order-1 md:order-3 md:ml-2">
        {current && (
          <div className="text-xs uppercase font-medium text-fg-accent-boldest tracking-wider bg-fg-accent-weakest px-2 rounded-full inline-block">
            Current!
          </div>
        )}
        {soon && (
          <div className="text-xs uppercase font-medium text-fg-accent-boldest tracking-wider bg-fg-accent-weakest px-2 rounded-full inline-block">
            Coming Soon
          </div>
        )}
      </div>
      <div className="order-2">
        <Link to={soon ? '#' : link} external={!soon}>
          {title}
        </Link>
      </div>
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
