export const arrayWithCommas = (array: string[]) => {
  if (!array || array.length === 0) return "";

  return array
    .map((item, i) => item + (array.length - 1 > i ? ", " : ""))
    .join("");
};
