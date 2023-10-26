import { ListGroup } from "react-bootstrap";

export function Fixture({ match }) {
  return (
    <ListGroup.Item key={match.id} className="fixture-item">
      <div className="fixture-content">
        <div className="team home-team">{match["home-team"].name}</div>
        <div className="fixture-time">{match.time}</div>
        <div className="team away-team">{match["away-team"].name}</div>
      </div>
    </ListGroup.Item>
  );
}
