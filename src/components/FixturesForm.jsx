import { Form } from "react-bootstrap";

export function FixturesForm({ teams, selectedTeam, handleTeamChange }) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Select Team:</Form.Label>
        <Form.Control
          as="select"
          value={selectedTeam || ""}
          onChange={handleTeamChange}
        >
          <option value="">All Teams</option>
          {teams.map((team) => (
            <option key={team} value={team}>
              {team}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
}
