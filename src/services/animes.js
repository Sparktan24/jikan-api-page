export const getAllAnimes = async () => {
  const response = await fetch('https://api.jikan.moe/v4/anime');
  const data = await response.json();
  const animeList = data.data;
  console.log('teched data', animeList);

  return animeList?.map((anime) => ({
    id: anime.mal_id,
    title: anime.title,
    image: anime.images.jpg.image_url,
    synopsis: anime.synopsis,
  }));
};
