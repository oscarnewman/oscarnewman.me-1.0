import cn from 'classnames'
import Footer from '../Footer'

interface Props {
  withHeader?: boolean
}

export function Page({ children, withHeader = false }) {
  return (
    <PageContainer>
      <InnerPageContainer>{children}</InnerPageContainer>
      <Footer />
    </PageContainer>
  )
}

const PageContainer = ({ children }) => (
  <div
    className={cn(
      'transition-all duration-150 container',
      'flex flex-col justify-start items-center h-full',
      'container',
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
