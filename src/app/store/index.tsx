import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import 'rxjs'
import RootReducer from '../reducer/RootReducer'

const epicMiddleware = createEpicMiddleware()

const store = createStore(RootReducer, applyMiddleware(thunk, logger, epicMiddleware))

export default store