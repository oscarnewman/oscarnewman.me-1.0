import { forwardRef } from 'react'
import clsx from 'clsx'

const OuterContainer = forwardRef<
  HTMLDivElement,
  {
    className?: string
    children: React.ReactNode
    [key: string]: any
  }
>(function OuterContainer({ className, children, ...props }, ref) {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
})

const InnerContainer = forwardRef<
  HTMLDivElement,
  { className?: string; children: React.ReactNode; [key: string]: any }
>(function InnerContainer({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
})

export const Container = forwardRef<
  HTMLDivElement,
  { className?: string; children: React.ReactNode; [key: string]: any }
>(function Container({ children, ...props }, ref) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})
