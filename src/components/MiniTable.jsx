import { Table } from "react-bootstrap";
import { SubHeader } from "./SubHeader";
import { LinkButton } from "./LinkButton";

export function MiniTable({ leagueTable }) {
  const topTenTable = leagueTable.slice(0, 10).map((team) => {
    return team;
  });

  return (
    <section className="mini-table">
      <SubHeader title="Isthmian Premier League" />
      <Table>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Club</th>
            <th>PL</th>
            <th>GD</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {topTenTable.map((team) => (
            <tr key={team.id}>
              <td>{team.position}</td>
              <td>{team.name}</td>
              <td>{team["all-matches"].played}</td>
              <td>{team["all-matches"]["goal-difference"]}</td>
              <td className="points">{team["total-points"]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <LinkButton linkTo={"/table"} text={"Full Table"} />
    </section>
  );
}
