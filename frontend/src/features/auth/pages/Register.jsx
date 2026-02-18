import React, { useState } from 'react'
import axios from 'axios'
import '../style/form.scss'

const Register = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    async function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:3000/api/auth/register', {
            username,
            email,
            password
        },{withCredentials:true} )
            .then(res => {
                console.log(res.data);

            })

    }

    return (

        <main>
            <div className="form-container">
                <h1>Register</h1>
                <form onSubmit={(e) => {
                    handleSubmit(e)
                }} >
                    <input
                        onInput={(e) => {
                            setUsername(e.target.value)
                        }}
                        // value={username}
                        required
                        name='username'
                        type="text" placeholder='Enter username' />
                    <input
                        onInput={(e) => { setEmail(e.target.value) }}
                        type="text"
                        required
                        name='email'
                        placeholder='Enter email' />
                    <input
                        onInput={(e) => { setPassword(e.target.value) }}
                        type="password"
                        required
                        name='password'
                        placeholder='Enter password' />
                    <button>Register</button>
                </form>
            </div>
        </main>

    )
}

export default Register
