import "./CardZoom.css";
import { Skeleton } from "./Skeleton";

export function CardZoom2({ image, icon, title, description, video1, id }) {
  const handleBack = (e) => {
    e.preventDefault();
    window.history.back();
  };
  return (
    <section className="max-w-screen w-full  h-max-full md:max-h-screen">
      <div className="  flex-wrap  flex  justify-center items-center gap-5 p-4 md:p-0 w-full">
        <div className=" rounded-3xl border border-gray-100  bg-white/30 dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none backdrop-blur-xl p-4 w-full max-w-sm ">
          <img
            src={icon}
            alt="icon"
            className="w-10 absolute top-1 right-1"
            id={id}
          />
          <div className="mx-auto h-full flex justify-around flex-col items-center text-center lg:text-left ">
            <header className="w-full text-start">
              <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                {title}
              </h2>
            </header>
            <p className="mt-4 text-gray-500">{description}</p>

            <div className="flex items-center flex-col justify-center">
              <img
                src={image}
                alt=""
                className="aspect-square max-w-[300px] rounded-3xl object-cover shadow-md w-full my-5"
              />
            </div>

            <a
              onClick={handleBack}
              className=" relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#030f33] to-[#4e737a] px-8 py-1  font-medium text-gray-50 backdrop-blur-3xl">
                Volver
              </span>
            </a>
          </div>
        </div>

        <figure className=" w-full max-w-5xl flex-col justify-center items-center gap-2 hidden md:flex ">
          {video1 ? (
            <video
              src={video1}
              autoPlay
              loop
              muted
              className=" w-full rounded-3xl aspect-video shadow-md"
            />
          ) : (
            <Skeleton />
          )}
          <h3 className="text-sm text-center text-dark opacity-60 ">
            Video de demostración
          </h3>
        </figure>
      </div>
    </section>
  );
}
