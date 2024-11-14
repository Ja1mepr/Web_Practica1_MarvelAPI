import '../Comic_Details.css'
//Componente que muestra los detalles de un comic concreto
export default function Comic_Details({ comic }) {
    // Aseguramos que el comic está definido antes de mostrar sus detalles
    if (!comic) {
        return <p>No hay detalles disponibles para este cómic.</p>;
    }

    return (
        <div className="feed-container">
        <div className="comic-info">
            
            <h1>{comic.title}</h1>
            <img
                src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                alt={comic.title}
                className="comic-main-image"
            />

            <p className="comic-description">
                {comic.description ? comic.description : "No hay resumen disponible para este cómic."}
            </p>
        </div>

        <h3>Personajes Principales</h3>
        <div className="characters-grid">
            {comic.characters.items.length > 0 ? (
                comic.characters.items.map((character, index) => (
                    <div key={index} className="character-card">
                        {character.thumbnail && character.thumbnail.path ? (
                            <img
                                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                alt={character.name}
                                className="character-thumbnail"
                            />
                        ) : (
                            <div className="character-placeholder">
                                <p>Imagen no disponible</p>
                            </div>
                        )}
                        <p>{character.name}</p>
                    </div>
                ))
            ) : (
                <p>No hay personajes disponibles para este cómic</p>
            )}
        </div>
    </div>
    );
}
