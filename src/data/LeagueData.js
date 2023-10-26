import axios from "axios";

const key = import.meta.env.VITE_SOME_KEY;

const footballApi = axios.create({
  baseURL: "https://football-web-pages1.p.rapidapi.com",
});

export function fetchLeagueTable() {
  const apiKey = `${key}`;
  const apiUrl = "/league-table.json?comp=11";

  const config = {
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "football-web-pages1.p.rapidapi.com",
    },
  };

  return footballApi.get(apiUrl, config).then((response) => {
    return response.data["league-table"].teams;
  });
}

export function fetchLeagueFixtures() {
  const apiKey = `${key}`;
  const apiUrl = "fixtures-results.json?comp=11";

  const config = {
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "football-web-pages1.p.rapidapi.com",
    },
  };

  return footballApi.get(apiUrl, config).then((response) => {
    return response.data["fixtures-results"].matches;
  });
}

export function fetchTeams() {
  const apiKey = `${key}`;
  const apiUrl = "/teams.json?comp=11";

  const config = {
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "football-web-pages1.p.rapidapi.com",
    },
  };

  return footballApi.get(apiUrl, config).then((response) => {
    return response.data.teams;
  });
}
