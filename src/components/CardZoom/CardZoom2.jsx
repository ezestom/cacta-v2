import { Skeleton } from "./Skeleton";
import close from "../../icons/x.svg";
import { useState } from "react";

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
    <section className="max-w-screen w-full  h-max-full md:max-h-screen ">
      <div className="  flex-wrap  flex  justify-center items-strech  gap-5 px-2  md:p-0 w-full">
        <div className=" rounded-[3rem] border border-gray-100  bg-white/30 dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/40 dark:shadow-none backdrop-blur-xl p-4   w-full max-w-md min-h-[550px]  ">
          <img src={icon} alt="icon" className="w-10 absolute top-3 right-3" />
          <div className="mx-auto h-full flex justify-around flex-col items-center text-start lg:text-left ">
            <header className="w-full ">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {title}
              </h2>
            </header>
            <p className="mt-4  text-gray-500 text-pretty">{description}</p>

            <div className="flex items-center flex-col justify-center">
              <img
                src={image}
                alt=""
                className=" rounded-[2rem] object-cover shadow-md border w-full mt-2 md:mt-4 h-[300px]"
              />
            </div>
          </div>
        </div>

        <figure className=" w-full max-w-3xl flex-col justify-center items-center gap-2 flex ">
          {video1 ? (
            <button onClick={openDialog}>
              <video
                autoPlay
                loop
                muted
                src={video1}
                className="aspect-video rounded-[3rem] shadow-2xl transition-all "
              ></video>
            </button>
          ) : undefined}

          <dialog
            open={isOpen}
            className="z-50 fixed h-screen w-screen backdrop-blur top-0 left-0"
          >
            <div
              aria-hidden="true"
              class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20 -z-10"
            >
              <div class="blur-[106px] h-[20rem] bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
              <div class="blur-[106px] h-32 bg-gradient-to-r from-secondary to-tertiary dark:to-indigo-600"></div>
            </div>
            <div class="absolute h-full w-full">
              <div class="-z-10 absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            </div>
            <video
              autoPlay
              loop
              muted
              src={video1}
              className=" m-auto bottom-0 top-0 left-0 right-0 absolute   mx-auto w-[98%] md:w-[65%] aspect-video rounded-[3rem] shadow-2xl "
            ></video>

            <span className="absolute top-3 right-3">
              <a
                onClick={closeDialog}
                className=" relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#030f33] to-[#4e737a] px-8 py-1  font-medium text-gray-50 backdrop-blur-3xl">
                  Atrás
                </span>
              </a>
            </span>
          </dialog>
        </figure>
      </div>
    </section>
  );
}
