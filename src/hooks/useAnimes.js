import { useCallback, useEffect, useState } from 'react';
import { getAllAnimes } from '../services/animes';

export function useAnimes() {
  const [animes, setAnimes] = useState([]);

  /*  const getAnimes = async () => {
    const data = await getAllAnimes();
    setAnimes(data);
  }; */

  const getAnimes = useCallback(async () => {
    const data = await getAllAnimes();
    setAnimes(data);
  }, []);

  useEffect(() => {
    getAnimes();
  }, [getAnimes]);

  console.log('animes in useEffect ', animes);
  return { data: animes };
}
