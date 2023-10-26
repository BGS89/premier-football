import { Container, Table } from "react-bootstrap";
import { Header } from "../components/Header.jsx";

export function LeagueTable({ leagueTable }) {
  return (
    <Container>
      <Header title={"Table"} />
      <main>
        <Table hover responsive className="league-table">
          <thead>
            <tr>
              <th>Position</th>
              <th className="league-table-team">Team</th>
              <th>Played</th>
              <th>Won</th>
              <th>Drawn</th>
              <th>Lost</th>
              <th>GF</th>
              <th>GA</th>
              <th>GD</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {leagueTable.map((team) => (
              <tr key={team.id}>
                <td>{team.position}</td>
                <td className="league-table-team">{team.name}</td>
                <td>{team["all-matches"].played}</td>
                <td>{team["all-matches"].won}</td>
                <td>{team["all-matches"].drawn}</td>
                <td>{team["all-matches"].lost}</td>
                <td>{team["all-matches"].for}</td>
                <td>{team["all-matches"].against}</td>
                <td>{team["all-matches"]["goal-difference"]}</td>
                <td className="points">{team["total-points"]}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </main>
    </Container>
  );
}
