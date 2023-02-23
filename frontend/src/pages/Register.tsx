import React, { FormEvent, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { api } from '../services/axios'
import { User } from '../types/types'

const Register = () => {

    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    const[data, setData] = useState<User>({
        name: '',
        email: '',
        password: ''
    })

    const handleCreateUser = async (event: FormEvent, name: string, email: string, password: string) =>{
        
        event.preventDefault()

        await api.post('/create', {name, email, password})
            .then(response=>console.log(response.data))

            setData({
                name: '',
                email: '',
                password: ''
            })

            navigate('/login')
    }

  return (
    <>
      <h1>Register</h1>

      <input type="text" placeholder='name...' onChange={(e)=>{
        setData({...data, name: e.target.value})
      }} />
      <input type="email" placeholder='email...' onChange={(e)=>{
        setData({...data, email: e.target.value})
      }} />
      <input type="password" placeholder='password...' onChange={(e)=>{
        setData({...data, password: e.target.value})
      }} />

      <button onClick={(e)=>{
        handleCreateUser(e, data.name!, data.email!, data.password!)
      }}>create user</button>

      <p>If you're already registered, just Log-In!</p>
      <Link to='/home'>
        <button>go</button>
      </Link>
    </>
  )
}

export default Register