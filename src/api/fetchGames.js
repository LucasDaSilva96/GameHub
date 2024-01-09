import loadApiKey from "./loadApiKey";

async function fetchGames() {
  try {
    const KEY = await loadApiKey();
    const res = await fetch(`https://api.rawg.io/api/games?key=${KEY}`);
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export default fetchGames;
