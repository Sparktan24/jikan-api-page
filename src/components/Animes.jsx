import { useAnimes } from '../hooks/useAnimes';

const ListOfAnimes = () => {
  const { data } = useAnimes();

  return (
    <ul className="animes">
      {data?.map((anime) => (
        <li className="anime" key={anime.id}>
          <h3>{anime.title}</h3>
          <img src={anime.image} />
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
