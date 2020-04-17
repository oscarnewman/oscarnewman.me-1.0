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
        I'm a junior at Brown University studying Computer Science and Machine
        Learning (officially), and Healthcare Policy (unofficially). Raised in
        Austin, Texas.
      </P>
      <VSpacer size={8}></VSpacer>

      <Link to="/OscarNewman.CV.2020.pdf" external>
        Latest CV <span className="opacity-50">→</span>
      </Link>
      <VSpacer size={1} />
      <Link to="http://github.com/oscarnewman" external>
        Github <span className="opacity-50">→</span>
      </Link>

      <Projects />

      <VSpacer size={16} />
      <H5>Course Work</H5>
      <VSpacer size={2} />

      <Project
        title="DinoCodes | Highly Secure QR Codes "
        description="A secure type of scannable code that embeds time, identity, and cryptographic signatures. Perfect for secure applications like ticketing and location verification."
        link="https://github.com/oscarnewman/KoalaNet"
        soon
        course="CS 1430 Computer Vision"
      />

      <VSpacer size={6} />

      <Project
        title="KoalaNet | Deep Learning Night Vision"
        description="A PyTorch reimplementation of a convolutional autoencoder to reexpose near-black images, trained on GCP for 40 hours. Adapted from Learning to See In The Dark (Chen et al. 2018)."
        link="https://github.com/oscarnewman/KoalaNet"
        course="CS 1420 Deep Learning"
      />
    </Page>
  )
}

const Projects = () => (
  <>
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

    <VSpacer size={6} />

    <Project
      title="oscarnewman.me"
      description="This site! Built with NextJS and Typescript. A bit of a testing ground for new things I want to try out."
      link="https://github.com/oscarnewman/oscarnewman.me"
      current
    />

    <VSpacer size={6} />

    <Project
      title="TucTuc | Ride Pooling for Students"
      description="Collaboration projet to help students carpool to and from Providence and Boston airports during breaks."
      link="https://taketuctuc.com"
    />
  </>
)
