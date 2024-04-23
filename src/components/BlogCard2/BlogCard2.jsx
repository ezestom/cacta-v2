import close from "../../icons/x.svg";
import { useState } from "react";
import "./BlogCard2.css";

export function BlogCard2({ image, title, description, read_more }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
    console.log("open");
    // stop scroll
    document.body.style.overflow = "hidden";
  };
  const closeDialog = () => {
    setIsOpen(false);
    // enable scroll
    document.body.style.overflow = "auto";
  };

  return (
    <div className="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10 ">
      <div className="relative overflow-hidden rounded-xl  ">
        <img
          src={image.src}
          alt="art cover"
          loading="lazy"
          width="1000"
          height="667"
          className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105 "
        />
      </div>
      <div className="mt-6 relative">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
          {title}
        </h3>
        <p className="mt-6 mb-8 text-gray-600 dark:text-gray-300 hidden md:block truncate ...">
          {description}
        </p>
      </div>
      <button
        onClick={openDialog}
        className="flex items-center justify-center w-full group-hover:text-tertiary text-black dark:text-white font-semibold mt-4 transition"
      >
        <span className="text-sm ">{read_more}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-4 h-4 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-2 group-hover:opacity-100"
        >
          <path
            fillRule="evenodd"
            d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <section className="fixed inset-0 z-50  items-center justify-center bg-black bg-opacity-50 flex flex-col ">
          <article className="relative w-full max-w-4xl p-4 md:p-12 bg-[#fafafa] dark:bg-gray-800 rounded-xl overflow-y-scroll max-h-[99%]  border border-gray-100 dark:shadow-none dark:border-gray-700">
            <div className="relative overflow-hidden rounded-xl">
              <button
                onClick={closeDialog}
                className="w-fit fixed top-0 right-0 p-2 bg-black rounded-xl rounded-e-none rounded-t-none hover:scale-105  transition duration-300 z-80"
              >
                <img src={close.src} alt="close" className="w-10 " />
              </button>
              <img
                src={image.src}
                alt="art cover"
                loading="lazy"
                className="  max-h-[300px] mx-auto rounded-xl shadow-2xl shadow-gray-600/10"
              />
            </div>
            <h3 className="mt-6 text-3xl font-semibold text-gray-800 dark:text-white">
              {title}
            </h3>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 text-pretty">
              {description}
            </p>
          </article>
        </section>
      )}
    </div>
  );
}
