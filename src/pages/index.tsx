import { ReactNode } from 'react'
import { Page } from '~/components/Layout/Page'
import { ModeToggle } from '~/components/ModeToggle'
import { Project } from '~/components/Project'
import { H1, H5, P } from '~/components/Typography'
import { Link } from '~/components/Typography/Link'

export default function Home() {
  return (
    <Page>
      <div className="space-y-8">
        <div className="space-y-8">
          <div className="space-y-6">
            <H1>🌵</H1>
            <H1>Howdy, I&apos;m Oscar.</H1>
          </div>

          <P>
            I&apos;m a software engineer at{' '}
            <Link to="https://solvhealth.com" external className="inline">
              Solv
            </Link>{' '}
            building great consumer healthcare experiences. I recently graduated
            from Brown University studying Computer Science and Machine Learning
            (officially), and Healthcare Policy (unofficially). Raised in
            Austin, Texas.
          </P>

          <div className="space-y-1">
            <Link to="/OscarNewman.CV.11.23.2022.pdf" external>
              Latest CV <span className="opacity-50">→</span>
            </Link>
            <Link to="http://github.com/oscarnewman" external>
              Github <span className="opacity-50">→</span>
            </Link>
          </div>
        </div>

        <Projects />
      </div>
    </Page>
  )
}

const LinkListSection = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => (
  <div className="space-y-2">
    <H5>{title}</H5>
    <div className="space-y-6">{children}</div>
  </div>
)

const Projects = () => (
  <LinkListSection title="Projects">
    <Project
      title="The Telehealth Report"
      description="A deep-dive analysis of the Telehealth industry, its history, its efficacy in cost savings and outcomes, and market opportunities moving forward."
      link="/Telehealth.pdf"
    />

    <Project
      title="Pillar | A Better Way to Give"
      description="A smart, automated giving platform that uses expert advice to build
    you a dynamic giving portfolio, keep it up to date, and maximize your
    impact."
      link="https://pillar.gives"
    />

    <Project
      title="oscarnewman.me"
      description="This site! Built with NextJS and Typescript. A bit of a testing ground for new things I want to try out."
      link="https://github.com/oscarnewman/oscarnewman.me"
    />

    <Project
      title="TucTuc | Ride Pooling for Students"
      description="Collaboration project to help students carpool to and from Providence and Boston airports during breaks."
      link="https://taketuctuc.com"
    />
  </LinkListSection>
)
