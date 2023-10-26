export function filterByTeam(fixtures, team) {
  return fixtures.filter(
    (match) =>
      match["home-team"].name === team || match["away-team"].name === team
  );
}
