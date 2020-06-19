import React from 'react'
import {Provider} from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import store from '../store'

import '../styles/index.scss'

function MyApp({Component, pageProps}) {
  console.log('Rendering App Component')
  return (
    <Provider store={store}>
      <Component {...pageProps}/>
    </Provider>
  )
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(MyApp)