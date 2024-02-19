import "./CardZoom.css";

export function CardZoom2({ image, icon, title, description, video1, id }) {
  const handleBack = (e) => {
    e.preventDefault();
    window.history.back();
  };
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="mx-auto max-w-screen-2xl  px-6 py-8 sm:px-6 sm:py-12 ">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-stretch">
          <div className="relative  rounded-3xl bg-white/50 shadow-md backdrop-blur-xl p-8 sm:p-8 max-w-sm">
            <img
              src={icon}
              alt="icon"
              className="w-12 absolute top-2 right-2"
              id={id}
            />
            <div className="mx-auto h-full flex justify-around flex-col items-center text-center lg:text-left ">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  {title}
                </h2>
              </header>
              <p className="mt-4 text-gray-500">{description}</p>

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

          <div className="lg:col-span-3 lg:py-8 ">
            <ul className="grid grid-cols-3 gap-4">
              <li className="col-start-1 col-end-3  ">
                <video
                  src={video1}
                  autoPlay
                  loop
                  muted
                  className=" w-full rounded-3xl object-cover shadow-md"
                />

                <div className="mt-3">
                  <h3 className="text-sm text-center text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    Video de demostración
                  </h3>
                </div>
              </li>

              <li className="col-start-3 ">
                <img
                  src={image}
                  alt=""
                  className="aspect-square w-full rounded-3xl object-cover shadow-md"
                />

                <div className="mt-3">
                  <h3 className="text-sm text-center text-gray-900 group-hover:underline group-hover:underline-offset-4">
                    Imagen de demostración
                  </h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
