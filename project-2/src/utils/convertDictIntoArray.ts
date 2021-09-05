export const convertDictIntoArray = <T>(inputDict: T | null) =>
  inputDict ? Object.entries(inputDict) : [];
