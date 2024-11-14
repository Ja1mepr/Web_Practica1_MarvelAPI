import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Feed from './components/Feed';
import Favourites from './components/Favourites';
import Comic_Details from './components/Comic_Details';
import logo from './Images/logo.png'

function App() {

  const [count, setCount] = useState(0);
  const [view, setView] = useState('feed');
  const [comicDetails, setComicDetails] = useState(null);

  //Funcion para cambiar la view a traves de botones
  const handleClick = (viewName) => {
    setView(viewName);
  }

  //Funcion para camvbiar la view a detalles con el comic especifico
  const handleSelectComic = (comic) => {
    setComicDetails(comic);
    setView('details');
  }

  return (
    <>
      <div>
        <div className='feed-bar'>
          <div className='feed-buttons'>
            <button className="feed-button" onClick={() => handleClick('feed')}>Feed</button>
            <button className="feed-button" onClick={() => handleClick('favourites')}>Favoritos</button>
          </div>
        </div>
        <div>
          {view === 'feed' && <Feed handleSelectComic={handleSelectComic}/>}
          {view === 'favourites' && <Favourites handleSelectComic={handleSelectComic}/>}
          {view === 'details' && <Comic_Details comic={comicDetails}/>}
        </div>
      </div>
    </>
  );
}

export default App
