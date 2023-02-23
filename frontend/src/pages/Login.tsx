import React, { FormEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { api } from '../services/axios'
import { User } from '../types/types'

const Login = () => {

  const navigate = useNavigate()
  const auth = useContext(AuthContext)

      const[data, setData] = useState<User>({
        email: '',
        password: ''
    })

    const handleLogin = async (event: FormEvent, email: string, password: string) =>{
      
          event.preventDefault()
          await auth.Authenticate(email, password)
    }
    if(auth.signed){
      navigate('/home')
    }else{
      return (
        <>
          <h1>Login</h1>

          <input type="email" placeholder='email...' onChange={(e)=>{
            setData({...data, email: e.target.value})
          }} />
          <input type="password" placeholder='password...' onChange={(e)=>{
            setData({...data, password: e.target.value})
          }} />
    
          <button onClick={(e)=>{
            handleLogin(e, data.email!, data.password!)
          }}>log</button>
        </>
      )
    }
}

export default Login