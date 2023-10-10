import { login } from '../api/data.js';
import { useNavigate, Link } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext'
import { useContext } from 'react'

export const Login = () => {
    const navigate = useNavigate()

    const { userLoginHandler } = useContext(AuthContext)

    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const username = formData.get('username').trim()
        const password = formData.get('password').trim()

        if (username === '' || password === '') {
            return alert('All fields are required')
        }
        login(username, password)
            .then(userData => {
                userLoginHandler(userData)
                navigate('/')
            })
    }

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="username"
                        id="username"
                        name="username"
                    />
                    <label htmlFor="login-password">Password:</label>
                    <input type="password" id="login-password" name="password" />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <Link to="/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}