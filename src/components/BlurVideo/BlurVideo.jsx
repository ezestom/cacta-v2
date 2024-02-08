import { useState } from "react";
import youtube from "../../img/youtube.png";
import video1 from "../../video/1080HeroCacta.mp4";
import close from "../../icons/x.svg";
import "./BlurVideo.css";

export function BlurVideo() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
    // stop scroll
    // document.body.style.overflow = "hidden";
  };
  const closeDialog = () => {
    setIsOpen(false);
    // enable scroll
    // document.body.style.overflow = "auto";
  };

  return (
    <article className=" max-w-full md:max-w-[85%] article-video">
      <button onClick={openDialog}>
        <video
          className="rounded-[4rem] shadow-md  app-video w-full opacity-90"
          src={video1}
          loop
          muted
          autoPlay
        ></video>
      </button>
      {isOpen && (
        <dialog open className="z-50 fixed h-screen w-screen top-0 left-0">
          <iframe
            className="m-auto bottom-0 top-0 left-0 right-0 absolute w-full p-1 md:w-[50%] aspect-video rounded-[3rem] shadow-2xl"
            src="https://www.youtube.com/embed/XTH7oeiY2Cg?si=fDqlXkuYmHE4XKDi&autoplay=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <button
            className="fixed top-10 bg-gradient-to-r from-[#030f33] to-[#4e737a] rounded-full  z-80 p-1 close-button "
            onClick={closeDialog}
          >
            <img src={close.src} alt="close button" />
          </button>
        </dialog>
      )}
    </article>
  );
}
