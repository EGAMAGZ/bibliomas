export const getActualYear = () => new Date().getFullYear();

export const formatDate = (date: Date, lang: string) =>
  Intl.DateTimeFormat(lang).format(date);

export const formatAccessDate = (date: Date, lang: string) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return new Intl.DateTimeFormat(lang, options).format(new Date());
};