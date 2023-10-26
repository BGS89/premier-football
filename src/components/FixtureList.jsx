import { ListGroup } from "react-bootstrap";
import { Fixture } from "./Fixture";
import { formatDate } from "../utils/formatDate";

export function FixtureList({
  currentDate,
  selectedTeam,
  matchesByDate,
  matchDays,
}) {
  return (
    <div>
      {matchesByDate.map((matchDay, index) => {
        const isMatchDayUpcoming = matchDay.some(
          (match) => new Date(match.date) >= currentDate
        );

        if (isMatchDayUpcoming) {
          const filteredMatches = matchDay.filter((match) => {
            // Filter matches based on the selected team
            if (selectedTeam) {
              return (
                new Date(match.date) >= currentDate &&
                (match["home-team"].name === selectedTeam ||
                  match["away-team"].name === selectedTeam)
              );
            }
            // If no team is selected, show all upcoming matches
            return new Date(match.date) >= currentDate;
          });

          if (filteredMatches.length > 0) {
            return (
              <div key={index}>
                <h4 className="fixture-date">{formatDate(matchDays[index])}</h4>
                <ListGroup className="text-center">
                  {filteredMatches.map((match) => (
                    <Fixture match={match} key={match.id} />
                  ))}
                </ListGroup>
              </div>
            );
          }
        }

        return null;
      })}
    </div>
  );
}
