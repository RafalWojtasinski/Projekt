import React from 'react';
import Cards from "../../components/card/card.jsx";

function FavoritesPage({ favoriteFilms }) {
    return (
        <div className="movie_list">
            <h2 className="list_title">{(type ? type : "Ulubione Filmy").toUpperCase()}</h2>
            <div className="list_cards">
                {
                    favoriteFilms.map(movie => (
                        <Cards key={movie.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default FavoritesPage;
