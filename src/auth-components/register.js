import { register } from '../api/data.js';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const navigate = useNavigate()

    const onSubmit = (e) => {
        e.preventDefault()
        
        const formData = new FormData(e.target);

        const username = formData.get('username').trim();
        const password = formData.get('password').trim();
        const repeatPass = formData.get('confirm-password').trim();

        if (username === '' || password === '') {
            return alert('All fields are required!')
        };

        if (password !== repeatPass) {
            return alert('Password must match!')
        };

        register(username, password)
            .then(navigate('/login'))
    }

    return (
        <section id="register-page" className="content auth">
            <form id="register" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="username"
                        id="username"
                        name="username"
                    />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="register-password" />
                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" />
                    <input className="btn submit" type="submit" defaultValue="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    )
}