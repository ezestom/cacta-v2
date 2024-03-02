import { useState, useEffect } from "react";
import logoLight from "../img/logo-negro.png";
import logoDark from "../img/logo-blanco.png";

export function LogoTheme() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    // Verificar el tema actual cuando se monta el componente
    const currentTheme = localStorage.getItem("theme");
    setIsDarkTheme(currentTheme === "dark");
  }, []); // Se ejecuta solo una vez al montar el componente

  // Escuchar cambios en el tema global
  useEffect(() => {
    const themeChangeHandler = (event) => {
      setIsDarkTheme(event.matches);
    };
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addListener(themeChangeHandler);
    return () => {
      mediaQuery.removeListener(themeChangeHandler);
    };
  }, []);

  return (
    <img
      src={isDarkTheme ? logoDark.src : logoLight.src}
      alt={`logo ${isDarkTheme ? "claro" : "oscuro"}`}
      className="w-40"
    />
  );
}
