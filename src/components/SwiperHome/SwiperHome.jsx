import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "./SwiperHome.css";

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
    <Swiper
      ref={swiperRef} // Asignar la referencia
      speed={1250}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={0}
      allowTouchMove={false} // Desactivar el deslizamiento manual
      pagination={{
        clickable: true,
        el: ".swiper-pagination",
      }}
      modules={[Autoplay, FreeMode, Pagination]}
      className="mySwiper z-0"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index} className="">
          <div className="home relative">
            <span className="swiper-fraction absolute text-6xl top-0 right-0 px-12 md:px-5 font-black text-white z-20">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <span className="swiper-pagination absolute m-auto" />
            <div className="home-swiper relative z-20">
              <article className="home-article relative w-full h-screen flex items-center justify-center lg:justify-start md:pl-[6rem] overflow-hidden">
                <div
                  className="home-data absolute flex flex-col items-center lg:items-start text-start lg-text-center z-10 gap-5 text-balance px-4 md:px-0 max-w-[35ch] lg:max-w-[60ch] lg:top-1/2 md:transform lg:-translate-y-1/2"
                  data-swiper-parallax="500"
                >
                  <h1
                    className="home-title bg-gradient-to-r from-white via-[#c684ff] to-[#8e33ff] text-transparent bg-clip-text text-[3.75rem] xl:text-[3.75vw] max-w-[15ch] leading-none tracking-tight font-black text-center lg:text-left -my-4 drop-shadow-md py-4 "
                    data-swiper-parallax="400"
                  >
                    {image.title}
                  </h1>
                  <h3 className="home-subtitle bg-gradient-to-r from-white  to-[#8e33ff] py-1 text-transparent bg-clip-text font-black text-3xl md:text-4xl max-w-[35ch] sm:leading-10 text-center lg:text-left tracking-tight drop-shadow-md ">
                    {image.subtitle}
                  </h3>
                  <hr />
                  <p className="home-subtitle text-center lg:text-left text-white font-bold text-xl md:text-2xl max-w-[35ch] tracking-tight text-balance drop-shadow-md">
                    {image.paragraph}
                  </p>
                </div>
                <img
                  data-swiper-parallax="-300"
                  src={image.img.src}
                  alt={`${image.img} image`}
                  className="absolute top-0 left-0 h-full object-cover object-center -z-10 w-full blur-sm overflow-hidden"
                />
                <div className="book-container">
                  <img
                    data-swiper-parallax="-200"
                    id="img2"
                    src={image.img2.src}
                    alt={`${image.img2} image`}
                    className="absolute lg:block hidden m-auto -right-[25rem] object-cover sm:rounded-[3rem] -z-10 opacity-85 p-4 shadow-md book "
                  />
                </div>
              </article>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}