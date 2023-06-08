export const useImageGetter = (isbn: string, size = "M") => {
  // template String
  const image = `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg`;

  return { image };
};
