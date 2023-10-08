import { Link } from 'react-router-dom'
import { AuthContext } from '../AuthContext'
import { useContext } from 'react'


export const Header = () => {
    const { auth } = useContext(AuthContext)

    return (
        <header>
            <h1>
                <Link className="home" to="/">
                    GamesPlay
                </Link>
            </h1>
            <nav>
                <Link to="/games">All games</Link>

                {
                    auth.token ?   <div id="user">
                                        <Link to="/games/create">Create Game</Link>
                                        <Link to="/logout">Logout</Link>
                                    </div>
                                        
                               :    <div id="guest">
                                        <Link to="/login">Login</Link>
                                        <Link to="/register">Register</Link>
                                    </div>
                }
            </nav>
        </header>
    )
}