import {createStore} from 'redux'
import rootReducer from './reducers'
import { createWrapper } from 'next-redux-wrapper'

const makeStore = context => createStore(rootReducer)

export default createWrapper(makeStore, {debug: true})