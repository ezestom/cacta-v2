import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import x from "../../icons/x.svg";
import "./Form.css";
import logo from "../../img/logo-blanco.png";
import agriculture from "../../img/agriculture.webp";

export function Form({
  h1,
  subtitle,
  button,
  toast_message,
  name,
  company,
  email,
  email_placeholder,
  message,
  message_placeholder,
  send,
  message_2,
}) {
  const [dialog, setDialog] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isMessageSuccess()) {
      toast("Information successfully submitted! Thank you for your trust.", {
        type: "success",
      });
      closeDialog();
    }
  }, []); // Agrega las dependencias aquí

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
    return (
      new URLSearchParams(window.location.search).get("success") === "true"
    );
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

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Server responded with ${response.status}: ${errorText}`
        );
      }

      toast("Information successfully submitted! Thank you for your trust.", {
        type: "success",
      });

      setTimeout(() => {
        const isEnglish = window.location.pathname.startsWith("/en");
        const redirectTo = isEnglish ? "/en/message-sent" : "/message-sent";

        closeDialog();
        window.location.href = redirectTo;
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        `There was a problem submitting the form, please try again. (Error: ${error.message})`
      );
      setIsLoading(false); // Asegúrate de desactivar el loading en caso de error
    }
  };

  return (
    <div className="relative form-container z-10 m-auto">
      <Toaster />
      <div className="flex w-full items-center justify-center">
        <a
          href="https://librecounter.org/referer/show"
          target="_blank"
          className="w-2 absolute bottom-5 mx-auto ml-7"
          name="referer"
        >
          <img
            src="https://librecounter.org/counter.svg"
            referrerPolicy="unsafe-url"
            alt="counter component"
          />
        </a>
      </div>
      <span className="flex btn-form">
        <button
          className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 transition hover:scale-105"
          onClick={openDialog}
          id="open-dialog"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#030f33] to-[#4e737a] px-8 py-1  font-medium text-gray-50 backdrop-blur-3xl">
            {button}
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
        </button>
      </span>

      {dialog && (
        <dialog
          open
          className="backdrop-blur  flex items-center justify-center fixed top-0 bg-black/20 w-full h-full "
        >
          <section className="md:bg-black/40 backdrop-blur-md flex items-center justify-center overflow-hidden  ">
            <div className="lg:grid h-full min-h-full lg:min-h-screen lg:grid-cols-12 w-full px-4 md:px-0 ">
              <aside className="relative hidden md:block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                <picture>
                  <img
                    src={agriculture.src}
                    alt="agriculture woman image"
                    className="absolute inset-0 h-full w-full object-cover hidden lg:block"
                  />
                  <img
                    src={logo.src}
                    className="absolute  bottom-20 mx-auto left-10 max-w-[150px] drop-shadow-md"
                    alt="logo cacta"
                  />
                </picture>
              </aside>

              <main className="flex items-center justify-center py-8 md:px-12 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 ">
                <div className="form-container-dialog max-w-xl lg:max-w-3xl p-8 bg-[#f0f0f0] rounded-3xl relative">
                  <button
                    className="absolute z-100 top-2 right-2 "
                    onClick={closeDialog}
                  >
                    <img
                      className="inline-flex  cursor-pointer items-center justify-center rounded-3xl bg-gradient-to-r from-[#030f33] to-[#4e737a]  p-2 hover:scale-105 transition font-medium text-gray-50 backdrop-blur-3xl"
                      src={x.src}
                      alt="x-icon"
                      id="close-dialog"
                    />
                  </button>
                  <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                    {h1}
                  </h1>

                  <p className="mt-4 leading-relaxed text-gray-700">
                    {subtitle}
                  </p>
                  {isLoading && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur bg-white/10 opacity-50 flex justify-center items-center z-50 rounded-3xl">
                      <span className="loader"></span>
                    </div>
                  )}
                  <form
                    onSubmit={handleSubmit}
                    method="POST"
                    action="https://formsubmit.co/jp.tena@cacta.eco"
                    // action="https://formsubmit.co/ezequielstom@gmail.com"
                    className="mt-8 gap-6"
                  >
                    <input
                      type="hidden"
                      name="_cc"
                      value="vicky.engelberger@cacta.eco,ezequielstom@gmail.com"
                    />

                    <input
                      type="hidden"
                      name="_subject"
                      value="🌵 Cacta | 📩 Nuevo Mensaje!"
                    />
                    <input
                      type="hidden"
                      name="_autoresponse"
                      value={toast_message}
                    ></input>

                    <input type="hidden" name="_captcha" value="false" />

                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        {name}
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="John Doe"
                          required
                          className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                      </label>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        {company}
                        <input
                          type="text"
                          name="company"
                          id="company"
                          placeholder="Cacta SaS."
                          required
                          className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                        />
                      </label>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        {email}
                        <input
                          className="p-2 mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                          type="email"
                          name="email"
                          id="email"
                          required
                          placeholder={email_placeholder}
                        />
                      </label>
                    </div>
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-700">
                        {message}
                        <textarea
                          name="message"
                          id="message"
                          required
                          className="w-full border-gray-200 rounded-md bg-white text-sm text-gray-700 shadow-sm p-2 max-h-[100px]"
                          placeholder={message_placeholder}
                        ></textarea>
                      </legend>
                    </fieldset>

                    <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                      <button
                        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-[#007d67] to-[#00ff9a] py-3 font-medium text-md text-gray-50 backdrop-blur-3xl hover:scale-[1.02] transition mt-2"
                        type="submit"
                      >
                        {send}
                      </button>
                      <p className="mt-4 text-sm text-gray-700 font-semibold sm:mt-0 text-center ">
                        ✉️ {message_2}
                      </p>
                    </div>
                  </form>
                </div>
              </main>
            </div>
          </section>
        </dialog>
      )}
    </div>
  );
}
