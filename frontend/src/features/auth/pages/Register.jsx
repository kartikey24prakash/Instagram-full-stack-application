import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'

const Register = () => {
    const { loading, handleRegister } = useAuth()

    const [ username, setUsername ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleRegister(username, email, password)
        navigate('/')
    }

    if (loading) {
        return (
            <main className="ig-root">
                <div className="ig-spinner">
                    <div className="ig-spinner-ring" />
                </div>
            </main>
        )
    }

    return (
        <main className="ig-root">
            <div className="ig-wrapper ig-wrapper--register">

                <div className="ig-col">

                    {/* Card */}
                    <div className="ig-card">
                        <div className="ig-logo">
                            <svg viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg" className="ig-logo-svg">
                                <path d="M66 0C48.1 0 45.8.1 38.7.4 31.7.7 26.9 1.9 22.7 3.6c-4.3 1.7-8 4-11.7 7.7C7.3 15 5 18.7 3.3 23c-1.7 4.2-2.9 9-3.2 16C-.2 46.1-.1 48.4-.1 66s-.1 19.9.2 27c.3 7 1.5 11.8 3.2 16 1.7 4.3 4 8 7.7 11.7 3.7 3.7 7.4 6 11.7 7.7 4.2 1.7 9 2.9 16 3.2C46.1 132.1 48.4 132 66 132s19.9.1 27-.2c7-.3 11.8-1.5 16-3.2 4.3-1.7 8-4 11.7-7.7 3.7-3.7 6-7.4 7.7-11.7 1.7-4.2 2.9-9 3.2-16 .3-7.1.4-9.4.4-27s.1-19.9-.2-27c-.3-7-1.5-11.8-3.2-16-1.7-4.3-4-8-7.7-11.7C117 7.3 113.3 5 109 3.3c-4.2-1.7-9-2.9-16-3.2C85.9-.2 83.6-.1 66-.1zm0 11.9c17.3 0 19.4.1 26.2.4 6.3.3 9.8 1.3 12 2.2 3 1.2 5.2 2.6 7.4 4.8 2.2 2.2 3.6 4.4 4.8 7.4.9 2.2 1.9 5.7 2.2 12 .3 6.8.4 8.9.4 26.2s-.1 19.4-.4 26.2c-.3 6.3-1.3 9.8-2.2 12-1.2 3-2.6 5.2-4.8 7.4-2.2 2.2-4.4 3.6-7.4 4.8-2.2.9-5.7 1.9-12 2.2-6.8.3-8.9.4-26.2.4s-19.4-.1-26.2-.4c-6.3-.3-9.8-1.3-12-2.2-3-1.2-5.2-2.6-7.4-4.8-2.2-2.2-3.6-4.4-4.8-7.4-.9-2.2-1.9-5.7-2.2-12-.3-6.8-.4-8.9-.4-26.2s.1-19.4.4-26.2c.3-6.3 1.3-9.8 2.2-12 1.2-3 2.6-5.2 4.8-7.4 2.2-2.2 4.4-3.6 7.4-4.8 2.2-.9 5.7-1.9 12-2.2 6.8-.3 8.9-.4 26.2-.4z" fill="url(#ig-grad-a)"/>
                                <path d="M66 88c-12.2 0-22-9.8-22-22s9.8-22 22-22 22 9.8 22 22-9.8 22-22 22zm0-55.9c-18.7 0-33.9 15.2-33.9 33.9S47.3 99.9 66 99.9 99.9 84.7 99.9 66 84.7 32.1 66 32.1z" fill="url(#ig-grad-b)"/>
                                <circle cx="100.4" cy="31.6" r="7.9" fill="url(#ig-grad-c)"/>
                                <defs>
                                    <linearGradient id="ig-grad-a" x1="132" y1="132" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FD5949"/>
                                        <stop offset=".5" stopColor="#D6249F"/>
                                        <stop offset="1" stopColor="#285AEB"/>
                                    </linearGradient>
                                    <linearGradient id="ig-grad-b" x1="132" y1="132" x2="0" y2="0" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FD5949"/>
                                        <stop offset=".5" stopColor="#D6249F"/>
                                        <stop offset="1" stopColor="#285AEB"/>
                                    </linearGradient>
                                    <linearGradient id="ig-grad-c" x1="108" y1="24" x2="93" y2="39" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FD5949"/>
                                        <stop offset="1" stopColor="#D6249F"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span className="ig-wordmark">Kartikeygram</span>
                        </div>

                        <p className="ig-register-tagline">
                            Sign up to see photos and videos from your friends.
                        </p>

                        <div className="ig-divider ig-divider--top">
                            <span className="ig-divider-line" />
                            <span className="ig-divider-text">OR</span>
                            <span className="ig-divider-line" />
                        </div>

                        <form className="ig-form" onSubmit={handleSubmit}>
                            <input
                                className="ig-input"
                                onChange={(e) => { setUsername(e.target.value) }}
                                type="text"
                                name='username'
                                id='username'
                                placeholder='Username' />
                            <input
                                className="ig-input"
                                onChange={(e) => { setEmail(e.target.value) }}
                                type="email"
                                name='email'
                                id='email'
                                placeholder='Email address' />
                            <input
                                className="ig-input"
                                onChange={(e) => { setPassword(e.target.value) }}
                                type="password"
                                name='password'
                                id='password'
                                placeholder='Password' />

                            <p className="ig-terms">
                                By signing up, you agree to our <a href="#" className="ig-terms-link">Terms</a>,{' '}
                                <a href="#" className="ig-terms-link">Privacy Policy</a> and{' '}
                                <a href="#" className="ig-terms-link">Cookies Policy</a>.
                            </p>

                            <button className="ig-btn" type="submit">Sign up</button>
                        </form>
                    </div>

                    {/* Log in box */}
                    <div className="ig-signup-box">
                        <p>Have an account? <Link className="ig-signup-link" to="/login">Log in</Link></p>
                    </div>

                    {/* App store links */}
                    <div className="ig-app-links">
                        <p className="ig-app-text">Get the app.</p>
                        <div className="ig-app-badges">
                            <div className="ig-badge">App Store</div>
                            <div className="ig-badge">Google Play</div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="ig-footer">
                <nav className="ig-footer-links">
                    {['Meta','About','Blog','Jobs','Help','API','Privacy','Terms','Locations','Top Accounts','Hashtags','Language'].map(t => (
                        <a key={t} href="#" className="ig-footer-link">{t}</a>
                    ))}
                </nav>
                <p className="ig-copyright">© 2025 PHOTOGRAM FROM META</p>
            </footer>
        </main>
    )
}

export default Register