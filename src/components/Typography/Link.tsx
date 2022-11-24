import classNames from 'classnames'
import NextLink from 'next/link'
import { ReactNode } from 'react'
import { StyleProps } from '~/util/style'

interface Props {
  external?: boolean
  to: string
  children: ReactNode
}

export function Link({
  children,
  external = false,
  to,
  className,
}: Props & StyleProps) {
  const InnerTag = (
    <a
      href={to}
      target={external ? '__BLANK' : ''}
      className={classNames(
        'block text-fg-accent font-medium hover:text-fg-accent-hover transition-colors duration-150',
        className,
      )}
    >
      {children}
    </a>
  )

  if (!external) {
    return (
      <NextLink
        href={to}
        target={external ? '__BLANK' : ''}
        className={classNames(
          'block text-fg-accent font-medium hover:text-fg-accent-hover transition-colors duration-150',
          className,
        )}
      >
        {children}
      </NextLink>
    )
  }

  return InnerTag
}
