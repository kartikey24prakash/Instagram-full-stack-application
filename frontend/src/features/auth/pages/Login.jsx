import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link} from  'react-router-dom'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(e) {
    e.preventDefault()
    console.log(username)
    console.log(password)
    axios.post('http://localhost:3000/api/auth/login', {
      username,
      password
    }, { withCredentials: true })
      .then(res => {
        console.log(res.data)
      })
  }

  return (
    <div>
      <main>
        <div className="form-container">
          <h1>Login</h1>
          <form onSubmit={(e) => {
            handleSubmit(e)
          }}>
            <input type="text"
              required
              onInput={(e) => {
                setUsername(e.target.value)
              }}
              value={username}
              placeholder='Enter username' />
            <input type="text"
              required
              onInput={(e) => {
                setPassword(e.target.value)
              }}
              value={password}
              placeholder='Enter password' />
            <button>Login</button>
          </form>
          <p>Don't have an account <Link className='toggleAuthForm' to='/register'>Register</Link></p>
        </div>
      </main>
    </div>
  )
}

export default Login
