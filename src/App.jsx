import "./App.css";
import { useEffect, useState } from "react";
import { fetchLeagueFixtures, fetchTeams } from "./data/LeagueData";
import { filterMatchDays } from "./utils/FilterMatchDays";
import { filterDates } from "./utils/filterDates";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Fixtures } from "./pages/Fixtures";
import { Navbar } from "./components/Navbar";
import { LeagueTable } from "./pages/LeagueTable";
import { fetchLeagueTable } from "./data/LeagueData";
import { fetchNewsArticles } from "./data/NewsData";
import { TheNews } from "./pages/TheNews.jsx";
import { Footer } from "./components/Footer.jsx";
import { SingleArticle } from "./components/SingleArticle.jsx";
import { ScrollToTop } from "./components/ScrollToTop.jsx";

function App() {
  const [fixtures, setFixtures] = useState([]);
  const [matchDays, setMatchDays] = useState([]);
  const [matchesByDate, setMatchesByDate] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [leagueTable, setLeagueTable] = useState([]);
  const [leagueTeams, setLeagueTeams] = useState([]);
  const [newsArticles, setNewsArticles] = useState([]);
  const [articlesLoading, setArticlesLoading] = useState(true);

  const teams = leagueTeams.map((team) => team["full-name"]);

  useEffect(() => {
    fetchLeagueFixtures()
      .then((leagueFixturesFromApi) => {
        setFixtures(leagueFixturesFromApi);

        const uniqueMatchDays = filterMatchDays(leagueFixturesFromApi);
        setMatchDays(uniqueMatchDays);

        const matchesByGroupedDate = uniqueMatchDays.map((matchDay) =>
          filterDates(leagueFixturesFromApi, matchDay)
        );
        setMatchesByDate(matchesByGroupedDate);

        fetchLeagueTable()
          .then((leagueTableFromApi) => {
            setLeagueTable(leagueTableFromApi);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });

        fetchTeams()
          .then((teamsFromApi) => {
            setLeagueTeams(teamsFromApi);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          });

        fetchNewsArticles().then((articles) => {
          setNewsArticles(articles);
          setArticlesLoading(false);
        });

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container">
      <ScrollToTop />
      <Navbar />
      <Container className="content-wrap">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                matchesByDate={matchesByDate}
                leagueTable={leagueTable}
                newsArticles={newsArticles}
                articlesLoading={articlesLoading}
              />
            }
          />
          <Route
            path="/fixtures"
            element={
              <Fixtures
                matchesByDate={matchesByDate}
                matchDays={matchDays}
                teams={teams}
              />
            }
          />
          <Route
            path="/table"
            element={<LeagueTable leagueTable={leagueTable} />}
          />
          <Route
            path="/news"
            element={
              <TheNews
                newsArticles={newsArticles}
                articlesLoading={articlesLoading}
              />
            }
          />
          <Route
            path="/articles/:article_id"
            element={<SingleArticle newsArticles={newsArticles} />}
          />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
