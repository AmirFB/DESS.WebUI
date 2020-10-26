export function dateToString(date) {
  const data = new Date(date);
  return (
    data.getFullYear() +
    "/" +
    data.getMonth() +
    "/" +
    data.getDay() +
    " " +
    data.getHours() +
    ":" +
    data.getMinutes() +
    ":" +
    data.getSeconds()
  );
}
