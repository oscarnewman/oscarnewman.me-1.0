import { DefaultSeo } from 'next-seo'
import App from 'next/app'
import Router from 'next/router'
import nProgress from 'nprogress'
import '~/styles/nprogress.css'
import '~/styles/tailwind.css'
import '~/styles/theme.css'
import seo from '~/util/seo.default'
import withGA from 'next-ga'
class BaseApp extends App {
  constructor(props) {
    super(props)

    nProgress.configure({
      showSpinner: false,
    })

    Router.events.on('routeChangeStart', nProgress.start)
    Router.events.on('routeChangeComplete', nProgress.done)
    Router.events.on('routeChangeError', () => nProgress.done(true))
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <DefaultSeo {...seo}></DefaultSeo>
        <Component {...pageProps} />
      </>
    )
  }
}

export default withGA('UA-163880946-1', Router)(BaseApp)
