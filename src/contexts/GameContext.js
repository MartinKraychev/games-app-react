import { createContext } from "react";
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

import { getAllCategories, getAllGames, deleteById, editById, create } from "../api/data";
export const GameContext = createContext()

export const GameProvider = ({
    children
}) => {
    const [games, setGames] = useState([])
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllCategories()
            .then(categories => setCategories(categories))
    }, [])

    useEffect(() => {
        getAllGames()
            .then(games => setGames(games))
    }, [])

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
        <GameContext.Provider value={{games, categories, deleteHandler, createHandler, editHandler }}>
            {children}
        </GameContext.Provider>)
}