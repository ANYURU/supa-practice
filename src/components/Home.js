import React from 'react'

function Home() {
  return (
    <div>
        <label htmlFor='email'>
        email
            <input id='email' placeholder='email'/>
        </label>
        <label htmlFor='password'>
            password
            <input id='password' placeholder='************' />
        </label>
    </div>
  )
}

export default Home