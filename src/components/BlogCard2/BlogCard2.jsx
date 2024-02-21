import close from "../../icons/x.svg";
import { useState } from "react";
import "./BlogCard2.css";

export function BlogCard2({ image, title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
    console.log("open");
    // stop scroll
    // document.body.style.overflow = "hidden";
  };
  const closeDialog = () => {
    setIsOpen(false);
    // enable scroll
    // document.body.style.overflow = "auto";
  };

  return (
    <div class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
      <div class="relative overflow-hidden rounded-xl">
        <img
          src={image.src}
          alt="art cover"
          loading="lazy"
          width="1000"
          height="667"
          class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <div class="mt-6 relative">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300 hidden md:block truncate ...">
          {description}
        </p>
      </div>
      <button
        onClick={openDialog}
        class="flex items-center justify-center w-full group-hover:text-tertiary text-black dark:text-white font-semibold mt-4"
      >
        <span class="text-sm ">Leer más</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-4 h-4 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-2 group-hover:opacity-100"
        >
          <path
            fill-rule="evenodd"
            d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <section class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
          <article class="relative w-full max-w-4xl p-4 md:p-12 bg-white rounded-xl overflow-y-scroll max-h-[95%] ">
            <button
              onClick={closeDialog}
              class="absolute top-0 right-0 p-3 bg-black/80 rounded-xl rounded-t-none rounded-e-none hover:bg-black/60 transition duration-300"
            >
              <img src={close.src} alt="close" />
            </button>
            <div class="relative overflow-hidden rounded-xl">
              <img
                src={image.src}
                alt="art cover"
                loading="lazy"
                class="  max-h-[300px] mx-auto rounded-xl shadow-2xl shadow-gray-600/10"
              />
            </div>
            <h3 class="mt-6 text-3xl font-semibold text-gray-800 dark:text-white">
              {title}
            </h3>
            <p class="mt-6 text-lg text-gray-600 dark:text-gray-300 text-pretty">
              {description}
            </p>
          </article>
        </section>
      )}
    </div>
  );
}
