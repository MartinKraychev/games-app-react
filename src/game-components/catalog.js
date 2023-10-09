import { CatalogGame } from "./catalog-game"

export const Catalog = ({games}) => {
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {games.length > 0 ? games.map(game => <CatalogGame key={game.id} game={game} />)
                                  : <p className="no-articles">No games yet</p>
                }
        </section>
    )
}