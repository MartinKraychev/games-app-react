import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

import { getById } from '../api/data.js';

import { AuthContext } from '../contexts/AuthContext.js'
import { GameContext } from "../contexts/GameContext"
import { useContext } from 'react'

export const Details = () => {
    const { gameId } = useParams()
    const [game, setGame] = useState({})

    useEffect(() => {
        getById(gameId)
            .then(game => setGame(game))
    }, [gameId])

    const { auth } = useContext(AuthContext)
    const { deleteHandler } = useContext(GameContext)

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.image} alt="img" />
                    <h1>{game.title}</h1>
                    <p className="type">{game.category?.name}</p>
                </div>
                <p className="text">
                    {game.summary}
                </p>
                {auth.id === game.user
                    ? <div className="buttons">
                        <Link to={`/games/edit/${gameId}`} className="button">
                            Edit
                        </Link>
                        <button className="button" onClick={() => deleteHandler(gameId)}>
                            Delete
                        </button>
                    </div>
                    : ''}
            </div>
        </section>
    )
}