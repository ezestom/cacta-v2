import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";
import x from "../../icons/x.svg";
import "./Form.css";
import logo from "../../img/logo-blanco.png";

export function Form({
  button,
  toast_message,
  name,
  company,
  email,
  email_placeholder,
  message,
  message_placeholder,
  send,
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

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `Server responded with ${response.status}: ${errorText}`
        );
      }

      toast("Information successfully submitted! Thank you for your trust.", {
        type: "success",
      });

      // Set a timeout to redirect after 3 seconds
      setTimeout(() => {
        // Determine where to redirect based on current URL path
        const currentPath = window.location.pathname;
        let redirectTo = "/message-sent";

        if (currentPath.startsWith("/en")) {
          redirectTo = "/en/message-sent";
        }

        closeDialog();
        window.location.href = redirectTo;
        setIsLoading(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was a problem submitting the form, please try again.");
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
        <dialog open>
          <div className="form-container-dialog">
            {isLoading && (
              <div className="absolute top-0 left-0 right-0 bottom-0 backdrop-blur bg-white/10 opacity-50 flex justify-center items-center z-50 rounded-3xl">
                <span className="loader"></span>
              </div>
            )}
            <form
              onSubmit={handleSubmit}
              method="POST"
              // action="https://formsubmit.co/jp.tena@cacta.eco"
              action="https://formsubmit.co/ezequielstom@gmail.com"
              className="relative"
            >
              <img
                src={logo.src}
                className="absolute  -top-14 mx-auto left-0 right-0 max-w-[125px]"
                alt="logo cacta"
              />
              <input type="hidden" name="_cc" value="ezequielstom@gmail.com" />

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
              <legend>
                <button
                  className="flex justify-center my-2"
                  onClick={closeDialog}
                >
                  <img
                    className="inline-flex  cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#030f33] to-[#4e737a]  p-1 hover:scale-105 transition font-medium text-gray-50 backdrop-blur-3xl right-0 absolute -top-6 "
                    src={x.src}
                    alt="x-icon"
                    id="close-dialog"
                  />
                </button>
              </legend>

              <div className="flex flex-col gap-2 min-w-[350px] ">
                <label htmlFor="name">
                  {name}
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="John Doe"
                    required
                    className="rounded-md "
                  />
                </label>
                <label htmlFor="company">
                  {company}
                  <input
                    type="text"
                    name="company"
                    id="comppany"
                    placeholder="Cacta SaS."
                    required
                    className="rounded-md "
                  />
                </label>
                <label htmlFor="email">
                  {email}
                  <input
                    className="rounded-md "
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder={email_placeholder}
                  />
                </label>
                <label htmlFor="message">
                  {message}
                  <textarea
                    name="message"
                    id="message"
                    required
                    placeholder={message_placeholder}
                  ></textarea>
                </label>
                <button
                  className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-[#007d67] to-[#00ff9a] py-2 font-medium text-md text-gray-50 backdrop-blur-3xl hover:scale-105 transition mt-2"
                  type="submit"
                >
                  {send}
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </div>
  );
}
