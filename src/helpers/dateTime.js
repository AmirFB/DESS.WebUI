export function dateToString(date) {
  const data = new Date(date);
  return (
    data.getFullYear() +
    "/" +
    (data.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    data.getDate().toString().padStart(2, "0") +
    " " +
    data.getHours().toString().padStart(2, "0") +
    ":" +
    data.getMinutes().toString().padStart(2, "0") +
    ":" +
    data.getSeconds().toString().padStart(2, "0")
  );
}
