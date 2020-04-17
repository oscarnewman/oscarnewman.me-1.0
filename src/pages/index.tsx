import { Page } from '~/components/Layout/Page'
import { VSpacer } from '~/components/Layout/Spacer'
import { Project } from '~/components/Project'
import { H1, H5, P } from '~/components/Typography'
import { Link } from '~/components/Typography/Link'

export default function Home() {
  return (
    <Page>
      <H1>🍤</H1>
      <VSpacer size={6} />
      <H1>Howdy, I'm Oscar.</H1>
      <VSpacer size={8}></VSpacer>
      <P>
        I'm a senior at Brown University studying Computer Science and Machine
        Learning (officially), and Healthcare Policy (unofficially). Raised in
        Austin, Texas.
      </P>
      <VSpacer size={8}></VSpacer>

      <Link to="/OscarNewman.CV.2020.pdf" external>
        Latest CV <span className="opacity-50">→</span>
      </Link>
      <Link to="http://github.com/oscarnewman" external>
        Github <span className="opacity-50">→</span>
      </Link>

      <VSpacer size={16} />
      <H5>Projects</H5>
      <VSpacer size={2} />

      <Project
        title="Pillar | A Better Way to Give"
        description="A smart, automated giving platform that uses expert advice to build
          you a dynamic giving portfolio, keep it up to date, and maximize your
          impact."
        link="https://pillar.gives"
        current
      />

      <VSpacer size={4} />

      <Project
        title="TucTuc | Ride Pooling for Students"
        description="Collaboration projet to help students carpool to and from Providence and Boston airports during breaks."
        link="https://taketuctuc.com"
      />
    </Page>
  )
}
