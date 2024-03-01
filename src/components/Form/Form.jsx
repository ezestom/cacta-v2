import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import x from "../../icons/x.svg";
import "./Form.css";

export function Form() {
  const [dialog, setDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isMessageSuccess()) {
      toast("¡Formulario enviado con éxito! Gracias por su confianza.", {
        type: "success",
      });
      closeDialog();
    }
  }, []);

  const openDialog = () => {
    setDialog(true);
    document.body.style.overflow = "hidden";
    document.getElementById("navbar").style.display = "none";
  };

  const closeDialog = () => {
    setDialog(false);
    document.body.style.overflow = "auto";
    document.getElementById("navbar").style.display = "flex";
  };

  const isMessageSuccess = () => {
    return window.location.search.includes("success=true");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    setIsLoading(true);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      if (response.ok) {
        toast("¡Formulario enviado con éxito! Gracias por su confianza.", {
          type: "success",
        });
        closeDialog();
      } else {
        throw new Error("Error al enviar el formulario");
      }
    } catch (error) {
      toast.error(
        "Hubo un problema al enviar el formulario, por favor inténtelo de nuevo."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative form-container z-10 m-auto">
      <Toaster />

      <h2 className="text-3xl font-bold text-gray-900 md:text-5xl dark:text-white text-center fixedTitle">
        ¿Preparado para comenzar?
      </h2>
      <div className="flex w-full items-center justify-center">
        <a
          href="https://librecounter.org/referer/show"
          target="_blank"
          className="w-2 absolute bottom-5 mx-auto ml-7"
        >
          <img
            src="https://librecounter.org/counter.svg"
            referrerPolicy="unsafe-url"
          />
        </a>
        <hr className="hr-contact bg-gradient-to-r from-[#ff3e57] to-[#ffb979 border-none" />
      </div>
      <span className="flex btn-form">
        <a
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 transition hover:scale-105"
          href="#open-dialog"
          onClick={openDialog}
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

      {dialog && (
        <dialog open>
          <div className="form-container-dialog">
            {isLoading && (
              <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur bg-white/10 opacity-50 flex justify-center items-center z-50">
                <span class="loader"></span>
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              method="POST"
              action="https://formsubmit.co/ezequielstom@gmail.com"
            >
              <input type="hidden" name="_cc" value="juantesen@gmail.com" />

              <input
                type="hidden"
                name="_subject"
                value="🚨 Cacta-Web | Nuevo Mensaje!"
              />
              <input
                type="hidden"
                name="_next"
                value="https://cacta-v2.vercel.app/"
              />
              <input type="hidden" name="_captcha" value="false" />
              <legend>
                <a
                  className="flex justify-center my-2"
                  href="/#contact"
                  onClick={closeDialog}
                >
                  <img
                    className="inline-flex  cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#030f33] to-[#4e737a]  p-1 hover:scale-105 transition font-medium text-gray-50 backdrop-blur-3xl"
                    src={x.src}
                    alt="x-icon"
                    id="close-dialog"
                  />
                </a>
              </legend>

              <div className="flex flex-col gap-2 min-w-[350px] ">
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
                  className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-[#007d67] to-[#00ff9a] py-2 font-medium text-md text-gray-50 backdrop-blur-3xl hover:scale-105 transition mt-2"
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
