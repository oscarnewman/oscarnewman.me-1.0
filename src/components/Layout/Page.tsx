import cn from 'classnames'

interface Props {
  withHeader?: boolean
}

export const Page: React.SFC<Props> = ({ children, withHeader = false }) => (
  <PageContainer>
    <InnerPageContainer>{children}</InnerPageContainer>
  </PageContainer>
)

const PageContainer = ({ children }) => (
  <div
    className={cn(
      'transition-all duration-150 container max-w-xl',
      'flex flex-col justify-start items-center h-full',
      'px-6 md:px-0',
    )}
  >
    {children}
  </div>
)

const InnerPageContainer = ({ children }) => (
  <div
    className={cn(
      'flex flex-col items-start justify-start flex-grow w-full',
      'py-20 md:py-32',
    )}
  >
    {children}
  </div>
)
