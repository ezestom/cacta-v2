import { useState } from "react";
import x from "../../icons/x.svg";
import "./Form.css";

export function Form() {
  const [dialog, setDialog] = useState(false);

  const openDialog = () => {
    setDialog(true);
    // hacer funcion para bloquear scroll
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    setDialog(false);
    // hacer funcion para desbloquear scroll
    document.body.style.overflow = "auto";
  };

  return (
    <div className="relative form-container  z-10  ">
      <h2 className="text-xl font-bold"> ¿Preparado para comenzar?​ </h2>
      <hr className="hr-contact bg-gradient-to-r from-[#ff3e57] to-[#ffb979 border-none" />
      <span className="flex">
        <a
          href="#open-dialog"
          onClick={openDialog} // Usar la función openDialog aquí
          id="open-dialog"
          class="flex h-9 w-full items-center justify-center px-4 rounded-full transition duration-300 hover:scale-105 bg-gradient-to-r from-[#030f33] to-[#4e737a] active:duration-75 active:scale-95 sm:w-max text-white font-bold "
        >
          Ir al formulario
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            ></path>
          </svg>
        </a>
      </span>

      {dialog && ( // Mostrar el diálogo solo cuando dialog es true
        <dialog open>
          <div className="form-container-dialog">
            <form
              method="POST"
              action="https://formsubmit.co/ezequielstom@gmail.com"
            >
              <input
                type="hidden"
                name="_next"
                value="https://yourdomain.co/thanks.html"
              ></input>
              <input type="hidden" name="_captcha" value="false"></input>
              <legend>
                <a
                  className="flex justify-center my-2"
                  href="/#contact"
                  onClick={closeDialog}
                >
                  {" "}
                  {/* Usar la función closeDialog aquí */}
                  <img
                    className="bg-black/30 rounded-xl p-2 hover:bg-black/20 transition "
                    src={x.src}
                    alt="x-icon"
                    id="close-dialog"
                  />
                </a>
              </legend>

              <div className="flex flex-col gap-4 min-w-[350px] ">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="John Doe"
                  className="rounded-md "
                  required
                />
                <label htmlFor="email">Correo</label>
                <input
                  className="rounded-md "
                  type="email"
                  name="email"
                  id="email"
                  placeholder="john_doe@ejemplo.com"
                  required
                />
                <label htmlFor="message">Mensaje</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Quiero unirme a la lista para recibir noticias sobre el lanzamiento de la App."
                  required
                ></textarea>
                <button
                  className="w-full bg-white/20 rounded-md py-1 hover:bg-white/30"
                  type="submit"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}
