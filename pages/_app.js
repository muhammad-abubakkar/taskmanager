import '../styles/index.scss'
import store from '../store'

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />
}

export default store.withRedux(MyApp)