import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from './pages/MainPage';
  


function App() {

  const [characters, setCharacters] = useState([]);

  const url = "https://rickandmortyapi.com/api/character/";

  const loadCharacters = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div className="App">
      <Header />
      {/* <Routes> */}
      <MainPage characters={characters}/>
      {/* <Route path="/" element={ */}
       
      {/* }/>
      </Routes> */}
      <Footer />
    </div>
  );
}

export default App;
