import loadApiKey from "./loadApiKey";

async function fetchGames({ pageParam }) {
  try {
    const KEY = await loadApiKey();

    const res = await fetch(
      `https://api.rawg.io/api/games?key=${KEY}&page=` + pageParam
    );
    const data = await res.json();

    return { ...data, nextCursor: data.next ? pageParam + 1 : null };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchGameById(id) {
  if (id) {
    try {
      const KEY = await loadApiKey();
      const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${KEY}`);
      const data = await res.json();
      return data;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default fetchGames;
