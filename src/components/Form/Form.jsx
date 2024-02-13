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
    <div className="relative form-container  z-10 m-auto ">
      <h2 className="text-3xl font-bold text-gray-900 md:text-6xl dark:text-white text-center">
        {" "}
        ¿Preparado para comenzar?{" "}
      </h2>
      <div className="flex w-full items-center justify-center">
        <a
          href="https://librecounter.org/referer/show"
          target="_blank"
          class="w-1"
        >
          <img
            src="https://librecounter.org/counter.svg"
            referrerPolicy="unsafe-url"
          />
        </a>
        <hr className="hr-contact  bg-gradient-to-r from-[#ff3e57] to-[#ffb979 border-none" />
      </div>
      <span className="flex">
        <a
          className=" relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
          href="#open-dialog"
          onClick={openDialog} // Usar la función openDialog aquí
          id="open-dialog"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#030f33] to-[#4e737a] px-8 py-1  font-medium text-gray-50 backdrop-blur-3xl">
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
          </span>
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
