import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
import DetailedPage from './pages/DetailedPage';
import RandomPage from './pages/RandomPage';
import FavoritesPage from './pages/FavoritesPage';
import CreativePage from './pages/CreativePage';
  


function App() {

  const [characters, setCharacters] = useState([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState([])

  const url = "https://rickandmortyapi.com/api/character/";

  const loadCharacters = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  const handleBookmarking = (id) => {
    const currentCharacter = (characters.find(character => character.id == id))

    // favoriteCharacters.some(favcharacter => favcharacter.id == currentCharacter.id) ? console.log(true) : setFavoriteCharacters(favoriteCharacters.push(currentCharacter))
    // console.log(favoriteCharacters)
    
    if (favoriteCharacters.includes(currentCharacter)) {
      setFavoriteCharacters(favoriteCharacters.filter(character => character.id !== currentCharacter.id))
    } else {
      setFavoriteCharacters(favoriteCharacters.push(currentCharacter))
    }
    console.log(favoriteCharacters)
  }

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<MainPage characters={characters} />} />
      <Route path="/details/:id" element={<DetailedPage characters={characters} handleBookmarking={handleBookmarking}/>} />
      
      
      <Route path="/random" element={<RandomPage character={characters}/>} />
      <Route path="/favorites" element={<FavoritesPage character={favoriteCharacters}/>} />
      <Route path="/creative" element={<CreativePage character={characters}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
