import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Parallax, Autoplay, FreeMode, Pagination } from "swiper/modules";
import "./SwiperHome.css";
import video from "../../video/portada_cacta_optimizado.mp4";
import poster from "../../img/agriculture.webp";

import home1 from "../../img/hero/farmApp.jpg";
import home2 from "../../img/hero/orange.avif";
import home3 from "../../img/hero/cow2.jpg";
import home4 from "../../img/hero/farm3.webp";
import home5 from "../../img/hero/irrigator.jpg";
import home6 from "../../img/hero/farm2.jpg";

import banner1 from "../../img/hero/platform1_test.png";
import banner2 from "../../img/hero/platform2_test.png";
import banner3 from "../../img/hero/platform3_test.png";
import banner4 from "../../img/hero/platform4_test.png";
import banner5 from "../../img/hero/platform5_test.png";

export function SwiperHome({
  title1,
  subtitle1,
  paragraph1,
  title2,
  subtitle2,
  paragraph2,
  title3,
  subtitle3,
  paragraph3,
  title4,
  subtitle4,
  paragraph4,
  title5,
  subtitle5,
  paragraph5,
  title6,
  subtitle6,
  paragraph6,
}) {
  const swiperRef = useRef(null); // Crear referencia para el Swiper

  const images = [
    {
      title: title1,
      subtitle: subtitle1,
      paragraph: paragraph1,
      img: home1,
      img2: banner5,
    },
    {
      title: title2,
      subtitle: subtitle2,
      paragraph: paragraph2,
      img: home3,
      img2: banner1,
    },
    {
      title: title3,
      subtitle: subtitle3,
      paragraph: paragraph3,
      img: home4,
      img2: banner3,
    },
    {
      title: title4,
      subtitle: subtitle4,
      paragraph: paragraph4,
      img: home5,
      img2: banner2,
    },
    {
      title: title5,
      subtitle: subtitle5,
      paragraph: paragraph5,
      img: home2,
      img2: banner5,
    },
    {
      title: title6,
      subtitle: subtitle6,
      paragraph: paragraph6,
      img: home6,
      img2: banner4,
    },
  ];

  return (
    <section className="relative h-screen md:h-[96vh] w-screen overflow-hidden">
      <figure className=" rounded-3xl shadow absolute top-0 bottom-0 m-auto -right-6 aspect-video max-w-[66%] max-h-[80%] z-10 p-1 bg-[#fafafa]/10 hidden xl:block">
        <video
          src={video}
          poster={poster.src}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover object-center w-full h-full rounded-[1.25rem] shadow-md "
        ></video>
      </figure>
      <Swiper
        ref={swiperRef}
        speed={1500}
        parallax={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={0}
        allowTouchMove={false} // Desactivar el deslizamiento manual
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        modules={[Parallax, Autoplay, FreeMode]}
        className="mySwiper z-0"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="bg-gradient-to-r from-[#007d67]/25 to-[#00ff9a]/25 border-b-2"
          >
            <div className="home relative">
              {/* <span className="swiper-fraction absolute text-6xl top-0 right-0 px-12 md:px-5 font-black text-white z-20">
                {(index + 1).toString().padStart(2, "0")}
              </span> */}
              <span className="swiper-pagination absolute m-auto" />
              <div className="home-swiper relative z-20 flex flex-col items-center justify-center h-screen w-screen">
                <article className="home-article relative w-[96vw] mx-auto md:w-full h-[80vh] md:h-screen flex items-center justify-center xl:justify-start xl:pl-[6rem] overflow-hidden rounded-3xl md:rounded-none ">
                  <div className="home-data absolute flex flex-col items-center xl:items-start xl:text-start lg-text-center z-10 gap-5 text-balance px-4 md:px-0 max-w-[35ch] xl:max-w-[60ch] xl:top-1/2 md:transform xl:-translate-y-1/2">
                    <h7
                      className="home-title bg-gradient-to-r from-[#007d67] to-[#00ff9a]  text-transparent bg-clip-text text-[3.5rem] xl:text-[3.25vw] max-w-[12ch] leading-tight tracking-tight font-black text-center xl:text-left -my-4 py-4 drop-shadow-xl text-balance "
                      data-swiper-parallax="-400"
                    >
                      {image.title}
                    </h7>
                    <h3
                      className="home-subtitle bg-gradient-to-r from-[#007d67] to-[#00ff9a]  py-1 text-transparent bg-clip-text font-bold text-3xl md:text-3xl text-balance max-w-[20ch] sm:leading-10 text-center xl:text-left tracking-tight drop-shadow-md"
                      data-swiper-parallax="-300"
                    >
                      {image.subtitle}
                    </h3>
                    <hr />
                    <p
                      className="home-subtitle text-center xl:text-left text-white font-normal text-base md:text-xl max-w-[30ch] tracking-tight text-balance drop-shadow-md"
                      data-swiper-parallax="-200"
                    >
                      {image.paragraph}
                    </p>
                  </div>
                  <img
                    src={image.img.src}
                    alt={`${image.img} image`}
                    className="absolute top-0 left-0 h-[80vh] md:h-screen object-cover object-center -z-10 w-full blur-sm brightness-80 "
                  />
                  {/* imagen de la app que hace swipe */}

                  {/* <div className="book-container">
                    <img
                      id="img2"
                      src={image.img2.src}
                      alt={`${image.img2} image`}
                      className="absolute lg:block hidden m-auto -right-[25rem] object-cover sm:rounded-[3rem] -z-10 opacity-85 p-4 shadow-md book "
                    />
                  </div> */}
                </article>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
