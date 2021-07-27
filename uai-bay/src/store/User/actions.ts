import { action } from 'typesafe-actions'
import { User, UserActions, UserDTO } from './types'

export const login = (userDTO: UserDTO) => action(UserActions.LOGIN, { userDTO })
export const loginSuccess = (userDTO: UserDTO) => action(UserActions.LOGIN_SUCCESS, { userDTO }) 