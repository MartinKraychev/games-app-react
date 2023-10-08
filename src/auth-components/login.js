import { login } from '../api/data.js';
import { useNavigate } from 'react-router-dom';

export const Login = ({ userLoginHandler }) => {
    const navigate = useNavigate()

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
                            If you don't have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}