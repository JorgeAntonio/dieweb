export const FormatDate = (date) => {
  if (!date) {
    return "";
  }

  const newDate = new Date(date);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return newDate.toLocaleDateString("es-ES", options);
};

export const CutWordsTitle = (content) => {
  const words = content.split(" ");
  return words.slice(0, 10).join(" ");
};

export const CutWordsContent = (content) => {
  const words = content.split(" ");
  return words.slice(0, 13).join(" ");
};

export const CutWordsEvent = (content) => {
  const words = content.split(" ");
  return words.slice(0, 5).join(" ");
};

export const SplitContent = (content) => {
  if (!content) {
    return [];
  }

  const paragraphs = content.split("\n");
  return paragraphs;
};

export default FormatDate;
