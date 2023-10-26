import { LiveScores } from "./LiveScores";
import { UpcomingFixtures } from "./UpcomingFixtures";

export function Matchweek({ matchesByDate }) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString();

  const todaysMatchDay = matchesByDate.find((matches) =>
    matches.some((match) => {
      const matchDate = new Date(match.date);
      const formattedMatchDate = matchDate.toLocaleDateString();
      return formattedMatchDate === formattedDate;
    })
  );

  const nextMatchDay = matchesByDate.find((matches) =>
    matches.some((match) => {
      const matchDate = new Date(match.date);
      return matchDate >= today;
    })
  );

  if (!todaysMatchDay) {
    return (
      <section className="matchweek">
        <UpcomingFixtures nextMatchDay={nextMatchDay} />
      </section>
    );
  }

  return (
    <section className="matchweek">
      <LiveScores todaysMatchDay={todaysMatchDay} />
      <UpcomingFixtures nextMatchDay={nextMatchDay} />
    </section>
  );
}
