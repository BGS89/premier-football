import { ListGroup } from "react-bootstrap";
import { SubHeader } from "./SubHeader";
import { VidiPrinter } from "./VidiPrinter";
import { Fixture } from "./Fixture";

export function LiveScores({ todaysMatchDay }) {
  return (
    <section>
      <SubHeader title="Live Scores" />
      <h3>Today</h3>
      <ListGroup className="text-centre">
        {todaysMatchDay.map((match) => (
          <Fixture match={match} key={match.id} />
        ))}
      </ListGroup>
      <VidiPrinter />
    </section>
  );
}
