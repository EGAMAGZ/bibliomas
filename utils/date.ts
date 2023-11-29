export const getActualYear = () => new Date().getFullYear();

export const formatDate = (date: Date, lang: string) =>
  Intl.DateTimeFormat(lang).format(date);
