export interface User{
    id?: number
    token?: string
    name?: string
    email?: string
    password?: string
}

export interface IAuthContext extends User{
    signed: boolean
    Authenticate: (email: string, password: string)=> Promise<void>
    LogOut: () => void
}