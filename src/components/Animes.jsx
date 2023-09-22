import dataMock from '../mocks/data-response.json';

const ListOfAnimes = () => {
  const data = dataMock.data;
  return (
    <ul className="animes">
      {data.map((anime) => (
        <li className="anime" key={anime.mal_id}>
          <h3>{anime.title}</h3>
          <img src={anime.images.jpg.image_url} />
          <p>{anime.synopsis}</p>
        </li>
      ))}
    </ul>
  );
};

const Animes = () => {
  return <ListOfAnimes />;
};

export default Animes;
