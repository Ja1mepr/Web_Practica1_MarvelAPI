import { useEffect, useState } from 'react'
import Favourites from "./Favourites";
import Favourites_Button from "./Favourites_Button";
import '../App.css'

//Componente  que muestra los comics mas recientes
export default function Feed({ handleSelectComic }){

    let Url_comics = "https://gateway.marvel.com:443/v1/public/comics?"
    let hash = "fc0694ad7f2154b45ebecb70c27fb51f";
    let publicKey = "8431fdbf9dee4049ff6c57119a8b2d89";
    let publicKey2 = "e9042ee74f3464bd2882387ad322e745";
    let hash2 = "0df4fa25659d5844a8f14da45d0a2abd";
    let API_Url = `${Url_comics}ts=1&apikey=${publicKey2}&hash=${hash2}&orderBy=-modified`;

    const [comics, setComics] = useState([])

    useEffect(() => {
        fetch(API_Url)
          .then(res => res.json())
          .then((data) => setComics(data.data.results))
    })

    return(
        <div className='feed-container'>
            <h1>Comics Recientes</h1>
            <div className="comics-grid">
                {comics.map((comic) => (
                <div key={comic.id} className="comic-card">
                    <img
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                    alt={comic.title}
                    className="comic-thumbnail"
                    />
                    <h3 className="comic-title">{comic.title}</h3>
                    <Favourites_Button comicFav={comic}/>
                    <button className='favourites-button' onClick={() => handleSelectComic(comic)}>Ver más</button>
                </div>
                ))}
            </div>
        </div>
    );
}