import { Reducer } from 'redux'
import { User, UserActions, UserState } from './types'

const INITIAL_STATE: UserState = {
    logged: false,
    loggedUser: null
}

const userReducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActions.LOGIN_SUCCESS: {
            const user: User = action.payload.user
            return {
                ...state, 
                loggedUser: user,
                logged: true
            }
        }
        default: {
            return state
        }
    }
}

export default userReducer