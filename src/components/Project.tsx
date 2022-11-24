import { VSpacer } from './Layout/Spacer'
import { P, Small } from './Typography'
import { Link } from './Typography/Link'

interface Props {
  title: string
  link: string
  description: string
  current?: boolean
  soon?: boolean
  internal?: boolean
  course?: string
}

export function Project({
  title,
  link,
  description,
  current = false,
  soon = false,
  internal = false,
  course,
}: Props) {
  return (
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
          <Link to={soon ? '#' : link} external={!internal}>
            {title}
          </Link>
        </div>
      </div>
      <P>{description}</P>
      {course && (
        <>
          <VSpacer size={1} />
          <Small>{course}</Small>
        </>
      )}
    </div>
  )
}
