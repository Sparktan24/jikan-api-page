import './App.css';
import Animes from './components/Animes';

function App() {
  return (
    <div className="page">
      <header>
        <h1>Anime List</h1>
        <form>
          <input
            type="text"
            name="query"
            placeholder="Naruto, One piece, Trigun ..."
          />
          <button>Buscar</button>
        </form>
      </header>
      <main>
        <Animes />
      </main>
    </div>
  );
}

export default App;
