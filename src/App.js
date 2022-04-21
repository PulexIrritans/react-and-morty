import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import DetailedPage from './pages/DetailedPage';
import RandomPage from './pages/RandomPage';
import FavoritesPage from './pages/FavoritesPage';
import CreativePage from './pages/CreativePage';

function App() {
  const [characters, setCharacters] = useState([]);
  const [favoriteCharacterIDs, setFavoriteCharacterIDs] = useState([]);

  const url = 'https://rickandmortyapi.com/api/character/';

  const loadCharacters = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  };

  useEffect(() => {
    loadCharacters();
    loadFavoriteCharacters();
  }, []);

  useEffect(() => {
    localStorage.setItem('favChar', JSON.stringify(favoriteCharacterIDs));
  }, [favoriteCharacterIDs])

  const loadFavoriteCharacters = () => {
    const localStorageReturn = JSON.parse(localStorage.getItem('favChar'));
    if (localStorageReturn === null) 
      setFavoriteCharacterIDs([])
      else setFavoriteCharacterIDs(localStorageReturn);
  };

  const handleBookmarking = id => {
    if (favoriteCharacterIDs.includes(id)) {
      const newfavoriteCharacterIDs = favoriteCharacterIDs.filter(characterID => {
        return characterID !== id;
      });
      setFavoriteCharacterIDs(newfavoriteCharacterIDs);
    } else {
      const newfavoriteCharacterIDs = [...favoriteCharacterIDs, id];
      setFavoriteCharacterIDs(newfavoriteCharacterIDs);
    }
  };

  return (
    <div className="App">
      <Header />
      <Routes className="Route">
        <Route path="/" element={<MainPage characters={characters} />} />
        <Route
          path="/details/:id"
          element={
            <DetailedPage
              characters={characters}
              favcharacterIDs={favoriteCharacterIDs}
              handleBookmarking={handleBookmarking}
            />
          }
        />

        <Route path="/random" element={<RandomPage characters={characters} />} />
        <Route
          path="/favorites"
          element={<FavoritesPage characters={characters} favcharacterIDs={favoriteCharacterIDs} handleBookmarking={handleBookmarking}/>}
        />
        <Route
          path="/creative"
          element={<CreativePage character={characters} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
