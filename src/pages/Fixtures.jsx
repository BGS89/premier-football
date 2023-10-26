import { Container, Form } from "react-bootstrap";
import { Header } from "../components/Header";
import { useState } from "react";
import { FixtureList } from "../components/FixtureList";
import { ResultsList } from "../components/ResultsList";
import { FixtureButtons } from "../components/FixtureButtons";
import { FixturesForm } from "../components/FixturesForm";

export function Fixtures({ matchesByDate, matchDays, teams }) {
  const currentDate = new Date();
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [fixturesOrResults, setFixturesOrResults] = useState("fixtures");

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleFixtureClick = () => {
    setFixturesOrResults("fixtures");
  };

  const handleResultsClick = () => {
    setFixturesOrResults("results");
  };

  if (fixturesOrResults === "fixtures") {
    return (
      <Container>
        <Header title={"Fixtures"} />
        <main>
          <FixtureButtons
            handleFixtureClick={handleFixtureClick}
            handleResultsClick={handleResultsClick}
          />
          <FixturesForm
            teams={teams}
            selectedTeam={selectedTeam}
            handleTeamChange={handleTeamChange}
          />
          <FixtureList
            currentDate={currentDate}
            selectedTeam={selectedTeam}
            matchesByDate={matchesByDate}
            matchDays={matchDays}
          />
        </main>
      </Container>
    );
  }

  return (
    <Container>
      <Header title={"Results"} />
      <main>
        <FixtureButtons
          handleFixtureClick={handleFixtureClick}
          handleResultsClick={handleResultsClick}
        />
        <FixturesForm
          teams={teams}
          selectedTeam={selectedTeam}
          handleTeamChange={handleTeamChange}
        />
        <ResultsList
          currentDate={currentDate}
          selectedTeam={selectedTeam}
          matchesByDate={matchesByDate}
          matchDays={matchDays}
        />
      </main>
    </Container>
  );
}
