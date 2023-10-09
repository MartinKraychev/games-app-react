import { useState, useEffect } from 'react'

import { CategoryOption } from '../base-components/category-option'

export const Create = ({createHandler, categories}) => {


    const onSubmit = (ev) => {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const title = formData.get('title').trim();
        const category_obj = document.querySelector('#category')
        const image = formData.get('image').trim();
        const summary = formData.get('summary').trim();

        const category= category_obj.selectedOptions[0].attributes.name.value


        if (title === '' || image === '' || summary === '') {
            return alert('All fields are required')
        };

        createHandler({title, category, image, summary})

    }

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                    />
                    <label htmlFor="category">Category:</label>
                    <select name="category" id="category">
                        ${categories.map(category => <CategoryOption key={category.id} category={category} />)}
                    </select>
                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" defaultValue={""} />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Create Game"
                    />
                </div>
            </form>
        </section>
    )
}