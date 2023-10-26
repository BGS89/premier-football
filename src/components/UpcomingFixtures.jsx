import { SubHeader } from "./SubHeader";
import { ListGroup } from "react-bootstrap";
import { LinkButton } from "./LinkButton";
import { formatDate } from "../utils/formatDate";
import { Fixture } from "./Fixture";

export function UpcomingFixtures({ nextMatchDay }) {
  return (
    <div className="upcoming-fixtures">
      <SubHeader title="Upcoming Fixtures" />
      <h3>{formatDate(nextMatchDay[0].date)}</h3>
      <ListGroup className="text-center">
        {nextMatchDay.map((match) => (
          <Fixture match={match} key={match.id} />
        ))}
      </ListGroup>
      <LinkButton linkTo={"/fixtures"} text={"Complete Fixture List"} />
    </div>
  );
}
