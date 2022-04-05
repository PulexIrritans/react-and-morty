import './App.css';
import Header from './Components/Header';
import Card from './Components/Card'
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <main>
       <Card></Card>
     </main>
     <Footer/>
    </div>
  );
}

export default App;
