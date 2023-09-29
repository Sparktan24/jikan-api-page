import { useState } from 'react';
import './App.css';
import Animes from './components/Animes';

function App() {
  const [search, updateSearch] = useState('');

  const handleChange = (e) => {
    const newSearch = e.target.value;
    updateSearch(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Anime List</h1>
        <form>
          <input
            type="text"
            value={search}
            onChange={handleChange}
            name="query"
            placeholder="Naruto, One piece, Trigun ..."
          />
          <p>{search}</p>
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
