export function dateToString(date) {
  const data = new Date(date);
  return (
    data.getFullYear() +
    "/" +
    (data.getMonth() + 1) +
    "/" +
    data.getDate() +
    " " +
    data.getHours() +
    ":" +
    data.getMinutes() +
    ":" +
    data.getSeconds()
  );
}
