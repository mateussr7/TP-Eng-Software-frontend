import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import rootReducer from './rootReducer'
import { UserState } from './User/types'

export interface ApplicationState {
    userReducer: UserState
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store