import './App.css';
import dataMock from './mocks/data-response.json';

function App() {
  const data = dataMock.data;
  return (
    <div className="page">
      <header>
        <h1>Anime List</h1>
      </header>
      <main>
        <ul className="animes">
          {data.map((anime) => (
            <li className="anime" key={anime.mal_id}>
              <h3>{anime.title}</h3>
              <img src={anime.images.jpg.image_url} />
              <p>{anime.synopsis}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
