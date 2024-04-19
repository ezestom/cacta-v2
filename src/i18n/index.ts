import english from "./en.json";
import spanish from "./es.json";

export const LANGUAGES = {
  ENGLISH: "en",
  SPANISH: "es",
};

export const geti18n = ({
  currentLocale = "es",
}: {
  currentLocale?: string | undefined;
}) => {
  if (currentLocale === LANGUAGES.ENGLISH) return english;
  if (currentLocale === LANGUAGES.SPANISH) return spanish;
  return spanish;
};
