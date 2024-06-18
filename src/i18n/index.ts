import english from "./en.json";
import spanish from "./es.json";
// import portuguese from "./po.json";


export const LANGUAGES = {
  ENGLISH: "en",
  // PORTUGUESE: "po",
  SPANISH: "es",
};

export const geti18n = ({
  currentLocale = "es",
}: {
  currentLocale?: string | undefined;
}) => {
  if (currentLocale === LANGUAGES.ENGLISH) return { ...spanish, ...english };
  // if (currentLocale === LANGUAGES.PORTUGUESE) return { ...spanish, ...portuguese };
  return spanish;
};
// tengo que crear una funcion para refrescar la web cuando cambia el idioma, asi me mantiene el idioma en el localstorage

// export const geti18n = () => {
//   const currentLocale = localStorage.getItem("locale") || "es";
//   if (currentLocale === LANGUAGES.ENGLISH) return english;
//   if (currentLocale === LANGUAGES.SPANISH) return spanish;
//   return spanish;
// };
//
// export const seti18n = (locale: string) => {
//   localStorage.setItem("locale", locale);
// };
