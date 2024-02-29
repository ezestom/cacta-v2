import { useState } from "react";
import play from "../../icons/play.svg";
import video1 from "../../video/previewInstitutional.mp4";
import close from "../../icons/x.svg";
import "./BlurVideo.css";

export function BlurVideo() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
    // stop scroll
    document.body.style.overflow = "hidden";
  };
  const closeDialog = () => {
    setIsOpen(false);
    // enable scroll
    document.body.style.overflow = "auto";
  };

  return (
    <article className="relative revealing-image ">
      <button onClick={openDialog}>
        <img
          src={play.src}
          alt="btn-img"
          className="absolute m-auto top-0 bottom-0 right-0 left-0 bg-gradient-to-r from-[#007d67] to-[#00ff9a] rounded-full  z-20 p-2 hover:scale-105 transition  "
        />
        <video
          className="relative max-h-screen  w-full rounded-3xl shadow-md z-10 max-w-[1000px] aspect-video mx-auto "
          src={video1}
          loop
          muted
          autoPlay
        ></video>
      </button>
      {isOpen && (
        <dialog open className="z-50 fixed h-screen w-screen top-0 left-0">
          <iframe
            className="m-auto bottom-0 top-0 left-0 right-0 absolute w-full p-1 md:w-[50%] aspect-video rounded-3xl shadow-2xl"
            src="https://www.youtube.com/embed/tAzA284tHsA?si=dJEFw3gxPdQsgOm-&vq=hd1080&autoplay=1&mute=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <button
            className="fixed top-20 bg-gradient-to-r from-[#030f33] to-[#4e737a] rounded-full  z-80 p-1 close-button "
            onClick={closeDialog}
          >
            <img src={close.src} alt="close button" />
          </button>
        </dialog>
      )}
    </article>
  );
}
