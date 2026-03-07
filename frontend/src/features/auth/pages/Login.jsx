import React, { useState } from 'react'
import "../style/form.scss"
import { Link } from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router'

const Login = () => {

    const { user, loading, handleLogin } = useAuth()

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await handleLogin(username, password)
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
            <div className="ig-wrapper">

                {/* Phone mockup — visible on desktop */}
                <div className="ig-mockup" aria-hidden="true">
                    <div className="ig-phone">
                        <div className="ig-phone-screen">
                            <div className="ig-screen-post ig-screen-post--1" />
                            <div className="ig-screen-post ig-screen-post--2" />
                            <div className="ig-screen-post ig-screen-post--3" />
                        </div>
                    </div>
                </div>

                {/* Right column */}
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
                            <span className="ig-wordmark">kartikeygram</span>
                        </div>

                        <form className="ig-form" onSubmit={handleSubmit}>
                            <input
                                className="ig-input"
                                onInput={(e) => { setUsername(e.target.value) }}
                                type="text"
                                name='username'
                                id='username'
                                placeholder='Phone number, username, or email' />
                            <input
                                className="ig-input"
                                onInput={(e) => { setPassword(e.target.value) }}
                                type="password"
                                name='password'
                                id='password'
                                placeholder='Password' />
                            <button className="ig-btn" type="submit">Log in</button>
                        </form>

                        <div className="ig-divider">
                            <span className="ig-divider-line" />
                            <span className="ig-divider-text">OR</span>
                            <span className="ig-divider-line" />
                        </div>

                        <button className="ig-fb-btn">
                            <svg viewBox="0 0 24 24" fill="#385898" className="ig-fb-icon">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                            Log in with Facebook
                        </button>

                        <a href="#" className="ig-forgot">Forgot password?</a>
                    </div>

                    {/* Sign up box */}
                    <div className="ig-signup-box">
                        <p>Don't have an account? <Link className="ig-signup-link" to="/register">Sign up</Link></p>
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

export default Login