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
      `https://api.rawg.io/api/games?dates=${start},${end}&key=${KEY}`
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchGamesThisYear({ pageParam }) {
  const currentYear = new Date().getFullYear();
  const startDate = `${currentYear}-01-01`;
  const endDate = `${currentYear}-12-31`;

  try {
    const KEY = await loadApiKey();
    const res = await fetch(
      `https://api.rawg.io/api/games?dates=${startDate},${endDate}&key=${KEY}&page=` +
        pageParam
    );
    const data = await res.json();
    return { ...data, nextCursor: data.next ? pageParam + 1 : null };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchBestGamesThisYear({ pageParam }) {
  const currentYear = new Date().getFullYear();
  const startDate = `${currentYear}-01-01`;
  const currMonth = new Date().getMonth();
  const currDay = new Date().getDay();
  const endDate = `${currentYear}-${
    currMonth === 0 ? "01" : currMonth < 10 ? `0${currMonth}` : currMonth
  }-${currDay < 10 ? `0${currDay}` : currDay}`;

  try {
    const KEY = await loadApiKey();
    const res = await fetch(
      `https://api.rawg.io/api/games?dates=${startDate},${endDate}&ordering=-added&key=${KEY}&page=` +
        pageParam
    );
    const data = await res.json();
    return { ...data, nextCursor: data.next ? pageParam + 1 : null };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchPopularGamesLastYear({ pageParam }) {
  const currentYear = new Date().getFullYear() - 1;
  const startDate = `${currentYear}-01-01`;
  const endDate = `${currentYear}-12-31`;

  try {
    const KEY = await loadApiKey();
    const res = await fetch(
      `https://api.rawg.io/api/games?dates=${startDate},${endDate}&ordering=-rating&key=${KEY}&page=` +
        pageParam
    );
    const data = await res.json();
    return { ...data, nextCursor: data.next ? pageParam + 1 : null };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchTopGames({ pageParam }) {
  const currentYear = new Date().getFullYear();
  const startDate = "2001-01-01";
  const endDate = `${currentYear}-12-31`;

  try {
    const KEY = await loadApiKey();
    const res = await fetch(
      `https://api.rawg.io/api/games?dates=${startDate},${endDate}&ordering=-rating&key=${KEY}&page=` +
        pageParam
    );
    const data = await res.json();
    return { ...data, nextCursor: data.next ? pageParam + 1 : null };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchGamesByGenre(genreId, page) {
  try {
    const KEY = await loadApiKey();
    const res = await fetch(
      `https://api.rawg.io/api/games?genres=${genreId}&ordering=-added&key=${KEY}&page=` +
        page
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

// From the RAWG-API
// PC - ID = 4,5,6
// Playstation - ID = 187, 18, 16, 2
// Xbox - ID = 1, 186, 14,
// Nintendo - ID = 7, 8
// Phone - ID = 21, 3
export async function fetchGamesByPlatform(platformId, page) {
  try {
    const KEY = await loadApiKey();
    const res = await fetch(
      `https://api.rawg.io/api/games?platforms=${platformId}&ordering=-added&key=${KEY}&page=` +
        page
    );
    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function fetchGameDetailsByTitle(title) {
  try {
    const KEY = await loadApiKey();
    const res = await fetch(
      `https://api.rawg.io/api/games?search=${encodeURIComponent(
        title
      )}&key=${KEY}`
    );
    const data = await res.json();

    // Assuming that the first result in the search is the desired game
    const gameId = data.results.length > 0 ? data.results[0].id : null;

    if (gameId) {
      // Fetch detailed information about the specific game using its ID
      const detailsRes = await fetch(
        `https://api.rawg.io/api/games/${gameId}?key=${KEY}`
      );
      const detailsData = await detailsRes.json();
      return detailsData;
    } else {
      return null;
    }
  } catch (err) {
    throw new Error(err.message);
  }
}

export default fetchGames;
