export default function formatDate(date) {
  if (!date) {
    return "";
  }

  const newDate = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return newDate.toLocaleDateString("es-ES", options);
}
