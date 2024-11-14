import React, { useState, useEffect } from 'react';
import '../App.css'

//Componente que contiene todos los comics añadidos a favoritos
export default function Favourites({ handleSelectComic }){

    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];
        setFavourites(storedFavourites);
    }, []);

    const deleteFavoutite = (comicId) => {

        const updatedFavourites = favourites.filter((comic) => comic.id !== comicId);
        setFavourites(updatedFavourites);

        localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
    }

    return (
        <div className='feed-container'>
            <h1>Comics Favoritos</h1>
            <div className="comics-grid">
                {favourites.length > 0 ? (
                    favourites.map((comic) => (
                        <div key={comic.id} className="comic-card">
                            <img
                                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                                alt={comic.title}
                                className="comic-thumbnail"
                                onClick={() => {handleSelectComic(comic)}}
                            />
                            <h3>{comic.title}</h3>
                            <button className='favourites-button' onClick={() => deleteFavoutite(comic.id)}>Eliminar Favorito</button>
                            <button className='favourites-button' onClick={() => handleSelectComic(comic)}>Ver más</button>
                        </div>
                    ))
                ) : (
                    <p>No tienes cómics en favoritos</p>
                )}
            </div>
        </div>
    );
}