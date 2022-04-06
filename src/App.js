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
  const [favoriteCharacters, setFavoriteCharacters] = useState([]);

  const url = 'https://rickandmortyapi.com/api/character/';

  const loadCharacters = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  const loadfavoriteCharacters = () => {
    const localStorageReturn = JSON.parse(localStorage.getItem('favChar'));
    localStorageReturn === null
      ? setFavoriteCharacters([])
      : setFavoriteCharacters(localStorageReturn);
  };

  useEffect(() => {
    loadfavoriteCharacters();
  },[]);


  const handleBookmarking = id => {
    // There is a problem with this function. It seems it doesn't work properly after
    // page reload, meaning when a user with fav characters in storage comes back to the
    // page the fav character will be added again to the fav characters array with click on the
    // symbol. The doubled fav character will be deleted when the symbol is clicked again.

    const currentCharacter = characters.find(character => {
      return character.id === id;
    });

    if (favoriteCharacters.includes(currentCharacter)) {
      const newfavoriteCharacter = favoriteCharacters.filter(character => {
        return character.id !== currentCharacter.id;
      });
      console.log(newfavoriteCharacter, 2)
      localStorage.setItem('favChar', JSON.stringify(newfavoriteCharacter));
      // The following line seems not to do anything. There is some problem that needs to be fixed.

      setFavoriteCharacters(newfavoriteCharacter);
    } else {
      const newfavoriteCharacter = [...favoriteCharacters, currentCharacter];
      console.log(newfavoriteCharacter, 1)
      localStorage.setItem('favChar', JSON.stringify(newfavoriteCharacter));
      // The following line seems not to do anything. There is some problem that needs to be fixed.
      setFavoriteCharacters(newfavoriteCharacter);

    }
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage characters={characters} />} />
        <Route
          path="/details/:id"
          element={
            <DetailedPage
              characters={characters}
              handleBookmarking={handleBookmarking}
            />
          }
        />

        <Route path="/random" element={<RandomPage character={characters} />} />
        <Route
          path="/favorites"
          element={<FavoritesPage characters={favoriteCharacters} handleBookmarking={handleBookmarking}/>}
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
