import ArgFlag from "../components/Flags/Argentine.astro";
import UsFlag from "../components/Flags/US.astro";
// Add missing imports
export const LANGUAGES: Record<
  string,
  { code: string; name: string; flag: typeof ArgFlag }
> = {
  en: {
    code: "en",
    name: "English",
    flag: UsFlag,
  },
  es: {
    code: "es",
    name: "Español",
    flag: ArgFlag,
  },
};

export const defaultLang = "es";
export const showDefaultLang = false;

export const ui = {
  es: {
    "nav.home": "Inicio",
    "nav.solution": "Solución",
    "nav.features": "Funcionalidades",
    "nav.whyCacta": "¿Por qué elegir Cacta?",
    "nav.us": "Nosotros",
    "nav.contact": "Contáctanos",
  },
  en: {
    "nav.home": "Home",
    "nav.solution": "Solution",
    "nav.features": "Features",
    "nav.whyCacta": "Why choose Cacta?",
    "nav.us": "About us",
    "nav.contact": "Contact us",
  },
} as const;

export const routes = {
  es: {
    home: "#home",
    solution: "#solution",
    features: "#features",
    whyCacta: "#why-cacta",
    us: "#us",
    contact: "#contact",
  },
  en: {
    home: "#home",
    solution: "#solution",
    features: "#features",
    whyCacta: "#why-cacta",
    us: "#us",
    contact: "#contact",
  },
};
