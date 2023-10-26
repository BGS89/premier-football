export function filterDates(fixtures, matchDay) {
  return fixtures.filter((match) => match.date === matchDay);
}
