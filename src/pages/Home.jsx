import { Matchweek } from "../components/Matchweek";
import { News } from "../components/News";
import { MiniTable } from "../components/MiniTable";
import { Container } from "react-bootstrap";
import { Header } from "../components/Header";

export function Home({
  matchesByDate,
  leagueTable,
  newsArticles,
  articlesLoading,
}) {
  return (
    <Container>
      <Header title={"Home"} />
      <main className="home">
        <News newsArticles={newsArticles} articlesLoading={articlesLoading} />
        <Matchweek matchesByDate={matchesByDate} />
        <MiniTable leagueTable={leagueTable} />
      </main>
    </Container>
  );
}
