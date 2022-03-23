import React from 'react'
import { useAuth } from '../components/contexts/auth'

function Home() {
  const { user, setUser } = useAuth()
  console.log(user)

  return (
    <div>
      home
      <button onClick={() => setUser(false)}> logout</button>
    </div>
  )
}

export default Home