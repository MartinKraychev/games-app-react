import { Link } from 'react-router-dom'

export const CatalogGame = ({game}) => {
    return (
        <div className="allGames">
        <div className="allGames-info">
            <img src={game.image} />
            <h6>{game.category.name}</h6>
            <h2>{game.title}</h2>
            <Link to={`/games/${game.id}`} className="details-button">
                Details
            </Link>
        </div>
    </div>
    )
}