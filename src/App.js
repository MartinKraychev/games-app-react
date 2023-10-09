import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { AuthContext } from './AuthContext';

import { getAllGames, deleteById, create, getAllCategories, editById } from './api/data.js';

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
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        getAllCategories()
            .then(categories => setCategories(categories))
    }, [])

    useEffect(()=> {
        getAllGames()
            .then(games => setGames(games))
    }, [])

    const userLoginHandler = (data) => {
        setAuth(data)
    }

    const userLogoutHandler = () => {
        setAuth({})
    }

    const deleteHandler = (gameId) => {
        deleteById(gameId)
            .then(() => {
                setGames(games => games.filter(game => game.id != gameId))
                navigate("/")
            })
    }

    const createHandler = (data) => {
        create(data)
            .then((game) => {
                setGames(oldGames => [...oldGames, game])
                navigate("/")
            })
    }

    const editHandler = (id, data) => {
        editById(id, data)
            .then((game) => {
                setGames(oldGames => oldGames.map(g => g.id == id ? game : g))
                navigate(`/games/${id}`)
            })
    }



    return (
        <AuthContext.Provider value={{ auth, deleteHandler }}>
            <div id="box">
                <Header />
                <main id="main-content">
                    <Routes>
                        <Route path="/" element={<Home games={games} />} />
                        <Route path="/login" element={<Login userLoginHandler={userLoginHandler} />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/logout" element={<Logout userLogoutHandler={userLogoutHandler}/>} />
                        <Route path="/games" element={<Catalog games={games}/>} />
                        <Route path="/games/create" element={<Create createHandler={createHandler} categories={categories}/>} />
                        <Route path="/games/edit/:gameId" element={<Edit games={games} editHandler={editHandler} categories={categories}/>} />
                        <Route path="/games/:gameId" element={<Details />} />
                    </Routes>
                </main>
            </div>
        </AuthContext.Provider>
    );
}

export default App;
