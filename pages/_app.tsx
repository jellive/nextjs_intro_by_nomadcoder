import Layout from '../components/Layout'
import '../src/app/globals.css'
import { AppProps } from 'next/app.js'

export default function MyApp({ Component, pageProps }: AppProps) {
  // pageProps는 serverSideProps임.
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
