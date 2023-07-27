import Layout from '../components/Layout'
import '../src/app/globals.css'
import { AppProps } from 'next/app.js'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
