import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import 'rxjs'

import RootReducer from '../reducer/RootReducer'
import rootEpics from '../actions/rootEpics'

const epicMiddleware = createEpicMiddleware()

const store = createStore(RootReducer, applyMiddleware(thunk, logger, epicMiddleware))

epicMiddleware.run(rootEpics)

export default store