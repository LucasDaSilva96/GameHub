import {
  get30daysPriorToday,
  getNextWeekDate,
  getThisWeekDate,
} from "../helpers/date";
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

export async function fetchGamesLast30Days({ pageParam }) {
  const today = get30daysPriorToday().today;
  const priorDate = get30daysPriorToday().priorDate;

  try {
    const KEY = await loadApiKey();
    const res = await fetch(
      `https://api.rawg.io/api/games?dates=${priorDate},${today}&ordering=-added&key=${KEY}&page=` +
        pageParam
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchGamesThisWeek() {
  const today = getThisWeekDate().startDate;
  const lastDay = getThisWeekDate().endDate;

  try {
    const KEY = await loadApiKey();
    const res = await fetch(
      `https://api.rawg.io/api/games?dates=${today},${lastDay}&key=${KEY}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchNextWeekGames() {
  const start = getNextWeekDate().startDate;
  const end = getNextWeekDate().endDate;

  try {
    const KEY = await loadApiKey();
    const res = await fetch(
      `https://api.rawg.io/api/games?dates=${start},${end}&ordering=-added&key=${KEY}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchGamesThisYear() {
  const currentYear = new Date().getFullYear();
  const startDate = `${currentYear}-01-01`;
  const endDate = `${currentYear}-12-31`;

  try {
    const KEY = await loadApiKey();
    const res = await fetch(
      `https://api.rawg.io/api/games?dates=${startDate},${endDate}&ordering=-added&key=${KEY}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export default fetchGames;
