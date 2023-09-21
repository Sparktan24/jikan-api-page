import "./App.css";
import dataMock from "./mocks/data-response.json";

function App() {
  const data = dataMock.data;
  return (
    <>
      <main>
        <h1>Anime List</h1>
        {data.map((anime) => {
          return (
            <div key={anime.mal_id}>
              <h3>{anime.title}</h3>
              <img src={anime.images.jpg.image_url} />
              <p>{anime.synopsis}</p>
            </div>
          );
        })}
      </main>
    </>
  );
}

export default App;
