export function filterMatchDays(fixtures) {
  const uniqueDates = new Set();

  for (const matchday of fixtures) {
    const date = matchday.date;
    uniqueDates.add(date);
  }

  return Array.from(uniqueDates);
}
