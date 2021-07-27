import { all } from 'redux-saga/effects'
import { userSagas } from './User/sagas'



export default function* rootSaga(){
    yield all([userSagas()])
}