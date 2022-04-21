import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-RZCHR4SZ18`}></Script>
    <Script id="google-analytics" strategy="lazyOnload">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RZCHR4SZ18', {
                page_path: window.location.pathname,
              });
                  `}
        </Script>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp