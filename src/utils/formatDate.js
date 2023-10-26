export function formatDate(dateStr) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  const date = new Date(dateStr);
  return date.toLocaleDateString(undefined, options);
}
