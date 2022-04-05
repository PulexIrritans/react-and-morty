import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Footer from './Components/Footer';
import { useEffect, useState } from "react";

  


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
      <main>
        <ul className="Cards-Container">
        {characters
            .map((character) => (
              <Card
                key={character.id}
                image={character.image}
                name={character.name}
              />
            ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default App;
