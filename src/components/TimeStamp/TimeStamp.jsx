import "./TimeStamp.css";
import write from "../../icons/write.svg";

export function TimeStamp({ time }) {
  // Fecha de publicación del artículo
  const publishedDate = new Date(time);

  // Fecha actual
  const currentDate = new Date();

  // Diferencia de tiempo entre la fecha de publicación y la fecha actual
  const diffTime = Math.abs(currentDate - publishedDate);

  // Convertir la diferencia de tiempo en días
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  // convertir si son 30 en meses

  const diffMonths = Math.floor(diffDays / 30);

  // convertir si son 365 en años

  const diffYears = Math.floor(diffDays / 365);

  return (
    <div className="flex flex-end w-fit ml-auto shadow-md rounded-xl mb-2 px-2 py-1 items-center text-gray-800 dark:text-gray-400 text-sm">
      <img src={write.src} className="w-5 pr-1" alt="icon date" />
      {diffDays < 30
        ? `${diffDays} days`
        : diffMonths < 12
        ? `${diffMonths} months`
        : `${diffYears} years`}
    </div>
  );
  // Ejemplo de uso
  // <TimeStamp time="2021-09-10T10:00:00Z" />
}

// Ejemplo de uso
// <TimeStamp time="2021-09-10T10:00:00Z" />
