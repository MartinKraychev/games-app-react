import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { AuthContext } from './AuthContext';

import { Login } from "./auth-components/login";
import { Register } from "./auth-components/register";
import { Header } from "./base-components/header";
import { Home } from "./base-components/home";
import { Catalog } from "./game-components/catalog";
import { Create } from "./game-components/create";
import { Details } from "./game-components/details";
import { Edit } from "./game-components/edit";
import { Logout } from './auth-components/logout';
import { UseLocalStorage } from './hooks/useLocalStorage';

function App() {
    const [games, setGames] = useState([])
    const [auth, setAuth] = UseLocalStorage('userData', {})

    const userLoginHandler = (data) => {
        setAuth(data)
    }

    const userLogoutHandler = () => {
        setAuth({})
    }

    return (
        <AuthContext.Provider value={{ auth }}>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login userLoginHandler={userLoginHandler} />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout userLogoutHandler={userLogoutHandler}/>} />
                        <Route path="/games" element={<Catalog />} />
                        <Route path="/games/create" element={<Create />} />
                        <Route path="/games/edit" element={<Edit />} />
                        <Route path="/games/:gameId" element={<Details />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
