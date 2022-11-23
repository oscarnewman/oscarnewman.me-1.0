import { DefaultSeo } from 'next-seo'
import App from 'next/app'
import Router from 'next/router'
import nProgress from 'nprogress'
import '~/styles/nprogress.css'
import '~/styles/tailwind.css'
import '~/styles/theme.css'
import seo from '~/util/seo.default'
import withGA from 'next-ga'
import Head from 'next/head'
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
        <Head>
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎯</text></svg>"
          />
        </Head>
        <DefaultSeo {...seo} />
        <Component {...pageProps} />
      </>
    )
  }
}

export default BaseApp
