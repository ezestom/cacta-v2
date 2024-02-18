import "./CardZoom.css";

export function CardZoom({ image, preTitle, title, description, video1 }) {
  const handleBack = (e) => {
    e.preventDefault();
    window.history.back();
  };
  return (
    <article className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 ">
      <div class=" grid h-full divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-200 text-gray-600 dark:border-gray-700 sm:grid-cols-1 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3 flex-wrap shadow-sm card">
        <img
          class="object-cover max-w-[350px] md:max-w-full image aspect-square "
          src={image}
          alt={`image about ${image}`}
        />

        <div class="p-5 bg-white relative h-auto max-w-[350px] md:max-w-full  aspect-square">
          {/* <p class="font-normal text-gray-700">{preTitle}</p> */}

          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>

          <p class="mb-5  font-normal text-gray-700">{description}</p>
        </div>
        <video
          className="aspect-square bg-white h-full max-w-[350px] md:max-w-full "
          src={video1}
          autoPlay
          loop
          muted
        ></video>
        <a
          onClick={handleBack}
          className=" absolute top-2 right-2 inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#030f33] to-[#4e737a] px-8 py-1  font-medium text-gray-50 backdrop-blur-3xl">
            Volver
          </span>
        </a>
      </div>
    </article>
  );
}
