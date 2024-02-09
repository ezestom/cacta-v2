import "./CardZoom.css";

export function CardZoom({ image, preTitle, title, description, video1 }) {
  const handleBack = (e) => {
    e.preventDefault();
    window.location.href = "/#features";
  };
  return (
    <article className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      <div class=" grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-1 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-3 flex-wrap card">
        <img
          class="object-cover image w-[400px]"
          src={image}
          alt={`image about ${image}`}
        />

        <div class="p-5 bg-white relative h-auto max-w-[400px]">
          {/* <p class="font-normal text-gray-700">{preTitle}</p> */}

          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>

          <p class="mb-5  font-normal text-gray-700">{description}</p>
        </div>
        <video className="max-w-[400px]" src={video1} autoPlay loop muted></video>
        <a
          onClick={handleBack}
          class="absolute top-2 right-2 inline-flex px-4 py-2 bg-gradient-to-r from-[#030f33] to-[#4e737a] rounded-full hover:scale-105 cursor-pointer text-white transition-all btn-back"
        >
          Volver
        </a>
      </div>
    </article>
  );
}
