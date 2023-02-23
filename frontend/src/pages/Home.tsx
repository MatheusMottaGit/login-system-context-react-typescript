import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Home = () => {

    const auth = useContext(AuthContext)

  return (
    <div>
      <h1>Logged!</h1>
    </div>
  )
}

export default Home