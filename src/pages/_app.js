import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <Component {...pageProps}>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Component>
  )
  
}
