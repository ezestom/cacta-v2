import { useState } from "react";
import close from "../../icons/x.svg";

export function CardZoom2({ image, icon, title, description, video1 }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
    // stop scroll
    document.body.style.overflow = "hidden";
  };

  const handleBack = (e) => {
    e.preventDefault();
    window.history.back();
  };
  const closeDialog = () => {
    const dialog = document.querySelector("dialog");
    setIsOpen(false);
    // enable scroll
    document.body.style.overflow = "auto";
    dialog.close();
  };

  return (
    <section className="max-w-screen w-full  h-max-full md:max-h-screen">
      <div className="flex justify-center flex-wrap  gap-5 px-2  md:p-0 w-full">
        <div className=" rounded-[3rem] border border-gray-100  bg-white/30 dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/40 dark:shadow-none backdrop-blur-xl p-4 md:p-8  w-full max-w-[500px] ">
          <div className="mx-auto h-full flex justify-center flex-col items-center text-start lg:text-left ">
            <header className="w-full ">
              <h2 className="my-2 text-gray-600 dark:text-gray-300 text-xl md:text-2xl font-bold py-2">
                {title}
              </h2>
            </header>
            <p className="my-4  text-gray-500 dark:text-gray-300 text-pretty  text-md ">
              {description}
            </p>

            <div className="flex items-center flex-col justify-center">
              <img
                src={image}
                alt=""
                className="object-cover max-h-[325px] drop-shadow"
              />
            </div>
          </div>
        </div>

        <figure className="z-[60]">
          {video1 ? (
            <button onClick={openDialog}>
              <video
                autoPlay
                loop
                muted
                src={video1}
                className=" aspect-auto w-full max-w-xl rounded-[3rem] shadow-2xl transition-all"
              ></video>
            </button>
          ) : undefined}

          <dialog
            open={isOpen}
            className="z-50 fixed h-screen w-screen backdrop-blur top-0 left-0 bg-transparent  bg-opacity-90 dark:bg-opacity-90"
          >
            <video
              autoPlay
              loop
              muted
              src={video1}
              className=" m-auto bottom-0 top-0 left-0 right-0 absolute   mx-auto w-[98%] md:w-1/2  rounded-[3rem] shadow-2xl  "
            ></video>

            <span className="absolute top-5 right-5">
              <a
                onClick={closeDialog}
                className=" relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#030f33] to-[#4e737a] p-2 z-50 font-medium text-gray-50 backdrop-blur-3xl">
                  <img src={close.src} alt="close-icon" />
                </span>
              </a>
            </span>
          </dialog>
        </figure>
      </div>
    </section>
  );
}
