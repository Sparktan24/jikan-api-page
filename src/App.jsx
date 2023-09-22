import './App.css';
import Animes from './components/Animes';
import { getAllAnimes } from './services/animes';

function App() {
  getAllAnimes();
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
