import './App.css';
import Animes from './components/Animes';

function App() {
  return (
    <div className="page">
      <header>
        <h1>Anime List</h1>
      </header>
      <main>
        <Animes />
      </main>
    </div>
  );
}

export default App;
