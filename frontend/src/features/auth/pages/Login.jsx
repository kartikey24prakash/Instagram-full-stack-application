import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link} from  'react-router-dom'
import {useAuth} from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const {handlelogin,loading} = useAuth()

  if(loading){
    return <h1>loading ....</h1>
  }
  function handleSubmit(e) {
    e.preventDefault()
    handlelogin(username,password)
    .then(res=>{
      console.log(res)
      navigate('/')
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
