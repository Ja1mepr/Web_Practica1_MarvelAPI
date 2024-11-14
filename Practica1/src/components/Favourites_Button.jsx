//Boton para añadir a favoritos
export default function Favourites_Button({comicFav}){

    const addFavourites = () => {
        const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];

        const isAlreadyFavourite = storedFavourites.some(fav => fav.id === comicFav.id);

        if (!isAlreadyFavourite) {

            storedFavourites.push(comicFav);

            localStorage.setItem("favourites", JSON.stringify(storedFavourites));
            console.log(`${comicFav.title} añadido a favoritos`);
        } else {
            console.log(`${comicFav.title} ya está en favoritos`);
        }
    }

    return(
        <div>
            <button className="favourites-button" onClick={addFavourites}>Añadir Favorito</button>
        </div>
    );
}