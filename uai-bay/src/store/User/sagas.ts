import { all, call, put, takeLatest } from 'redux-saga/effects'
import { loginService } from '../../services/userServices'
import { AnyAction } from 'redux'
import { login, loginSuccess } from './actions'
import { User, UserActions, UserDTO } from './types'

export function* userSagas(){
    yield takeLatest(UserActions.LOGIN, loginSagas)
}

function* loginSagas(action: AnyAction){
    try{
        const user: UserDTO = action.payload.userDTO
        const loggedUser: User = yield call(() => loginService(user))
        yield put(loginSuccess(loggedUser))
    }catch(err){
        
    }
}