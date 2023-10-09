import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";

import { CategoryOption } from '../base-components/category-option'
import { getById } from '../api/data.js';

export const Edit = ({editHandler, categories}) => {
    const { gameId } = useParams()
    const [game, setGame] = useState({})

    useEffect(() => {
        getById(gameId)
            .then(game => setGame(game))
    }, [])

    const onsubmit = (ev) => {
        ev.preventDefault()

        const formData = new FormData(ev.target);
        const title = formData.get('title').trim();
        const category_obj = document.querySelector('#category')
        const image = formData.get('image').trim();
        const summary = formData.get('summary').trim();

        const category= category_obj.selectedOptions[0].attributes.name.value


        if (title === '' || image === '' || summary === '') {
            return alert('All fields are required')
        }

        editHandler(gameId, {title, category, image, summary})

    }
    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onsubmit}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" defaultValue={game.title} />
                    <label htmlFor="category">Category:</label>
                    <select name="category" id="category">
                        ${categories.map(category => <CategoryOption key={category.id} category={category} />)}
                    </select>
                    <label htmlFor="image">Image:</label>
                    <input type="text" id="image" name="image" defaultValue={game.image} />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={game.summary} />
                    <input className="btn submit" type="submit" defaultValue="Edit Game" />
                </div>
            </form>
        </section>
    )
}