import { CatalogGame } from "./catalog-game"

import { GameContext } from "../contexts/GameContext" 
import { useContext } from 'react'

export const Catalog = () => {
    const { games } = useContext(GameContext)

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0 ? games.map(game => <CatalogGame key={game.id} game={game} />)
                                  : <p className="no-articles">No games yet</p>
                }
        </section>
    )
}