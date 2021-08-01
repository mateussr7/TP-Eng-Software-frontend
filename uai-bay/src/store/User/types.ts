export interface UserState {
    logged: boolean
    loggedUser: User | null
}

export interface User {
    id: number
    name: string
    email: string
    password: string
    telephone: string
    isAdmin: boolean
    inTrash: boolean
    exclude: boolean
    logged: boolean
}

export interface UserDTO {
    id?: number
    name?: string
    email: string
    password: string
    telephone?: string
    isAdmin?: boolean
    inTrash?: boolean
    exclude?: boolean
    logged?: boolean
}

export enum UserActions {
    LOGIN = '@user/LOGIN',
    LOGIN_SUCCESS = '@user/LOGIN_USER'
}