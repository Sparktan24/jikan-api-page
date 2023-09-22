//  import dataMock from '../mocks/data-response.json';

export const getAllAnimes = async () => {
  /* const animes = dataMock.data;
  return animes?.map((anime) => ({
    id: anime.mal_id,
    title: anime.title,
    image: anime.images.jpg.image_url,
    synopsis: anime.synopsis,
  })); */

  const response = await fetch('https://api.jikan.moe/v4/anime');
  const data = await response.json();
  const animeList = data.data;
  console.log(animeList);
};
