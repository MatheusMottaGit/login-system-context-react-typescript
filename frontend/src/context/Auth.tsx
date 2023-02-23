import { useEffect, useState } from "react";
import { api } from "../services/axios";
import { User } from "../types/types";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({children}: {children: JSX.Element}) =>{

        const[user, setUser] = useState<User | null>(null)

            useEffect(() => {
                const LoadingStorageData = () =>{
                    const storageUser = localStorage.getItem("@Auth:user")
                    const storageToken = localStorage.getItem("@Auth:token")
        
                    if(storageUser && storageToken){
                       setUser(storageUser)
                    }
                }

                LoadingStorageData()
            }, [])
            

        const Authenticate = async (email: string, password: string) =>{
            const response = await api.post('/auth', {
                email,
                password
            })
                if(response.data.error){
                    alert(response.data.error)
                }else{
                    setUser(response.data)

                    api.defaults.headers.common[
                        "Authorization"
                    ] = `Bearer ${response.data.token}`

                    localStorage.setItem("@Auth:token", response.data.token)
                    localStorage.setItem("@Auth:user", JSON.stringify(response.data.user))
                }
        }

        const LogOut = () =>{
            localStorage.clear()
            setUser(null)
        }

    return(
        <AuthContext.Provider value={{
            ...user, 
            signed: !!user, 
            Authenticate, 
            LogOut

            }}>
            {children}
        </AuthContext.Provider>
    )
}