import { AuthContext } from "../context/AuthContext"
import {useContext} from 'react'
import { Navigate, Outlet } from "react-router-dom"

export const Private = () =>{
    const {signed} = useContext(AuthContext)

    return signed ? <Outlet/> : <Navigate to='/'/>
}