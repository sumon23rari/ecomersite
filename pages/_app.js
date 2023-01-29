import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SSRProvider from 'react-bootstrap/SSRProvider';
export default function App({ Component, pageProps }) {
  return (
  <SSRProvider>
  <Component {...pageProps} />
  </SSRProvider>
  )
}
