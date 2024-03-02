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
      <div className="flex justify-center flex-wrap  gap-5 px-2  md:p-0 w-full">
        <div className=" rounded-[3rem] border border-gray-100  bg-white/30 dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/40 dark:shadow-none backdrop-blur-xl p-4  w-full max-w-[500px] ">
          {/* <img src={icon} alt="icon" className="w-10 absolute top-3 right-3" /> */}
          <div className="mx-auto h-full flex justify-center flex-col items-center text-start lg:text-left ">
            <header className="w-full ">
              <h2 className="text-xl text-center font-bold text-gray-900 sm:text-2xl dark:text-white uppercase">
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

        <figure className=" z-20  ">
          {video1 ? (
            <button onClick={openDialog}>
              <video
                autoPlay
                loop
                muted
                src={video1}
                className=" w-full max-w-xl rounded-[3rem] shadow-2xl transition-all "
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
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#030f33] to-[#4e737a] px-8 py-1  font-medium text-gray-50 backdrop-blur-3xl">
                  Cerrar
                </span>
              </a>
            </span>
          </dialog>
        </figure>
      </div>
    </section>
  );
}
