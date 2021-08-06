import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return(
    <Layout children={<Component {...pageProps} />} />
  ) 
}

export default MyApp
