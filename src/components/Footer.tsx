import { Link } from './Typography/Link'
import { HSpacer } from './Layout/Spacer'

const Footer = () => {
  return (
    <footer className="flex justify-center pb-24">
      <Link to="mailto:oscar@oscarnewman.me" external>
        Get in touch
      </Link>
    </footer>
  )
}

export default Footer
