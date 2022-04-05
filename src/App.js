import './App.css';
import Header from './Components/Header';
import Card from './Components/Card';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ul className="Cards-Container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default App;
