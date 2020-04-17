import NextLink from 'next/link'

interface Props {
  external?: boolean
  to: string
}

export const Link: React.SFC<Props> = ({ children, external = false, to }) => {
  const InnerTag = (
    <a
      href={to}
      target={external ? '__BLANK' : ''}
      className="text-fg-accent font-medium hover:text-fg-accent-hover  transition-colors duration-150"
    >
      {children}
    </a>
  )

  if (!external) {
    return <NextLink href={to}>{InnerTag}</NextLink>
  }

  return InnerTag
}
