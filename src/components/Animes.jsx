import { useEffect, useState } from 'react';
import { getAllAnimes } from '../services/animes';

function useAnimes() {
  const [animes, setAnimes] = useState([]);

  const getAnimes = async () => {
    const data = await getAllAnimes();
    setAnimes(data);
  };

  useEffect(() => {
    getAnimes();
  }, []);

  console.log(animes);
  return { data: animes };
}

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
