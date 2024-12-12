import { useState } from "react";
import play from "../../icons/play.svg";
import video1 from "../../video/previewInstitutional.mp4";
import close from "../../icons/x.svg";
import "./BlurVideo.css";

export function BlurVideo({ youtube_url_1 }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };
  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <article className="relative flex justify-center revealing-image">
      <button onClick={openDialog}>
        <img
          src={play.src}
          alt="btn-img"
          className="absolute m-auto top-0 bottom-0 right-0 left-0 bg-gradient-to-r from-[#007d67] to-[#00ff9a] rounded-full z-20 p-2 hover:scale-105 transition  "
        />
        <video
          id="loopvideo"
          className="relative max-h-screen  w-full rounded-3xl shadow-md z-10  aspect-video mx-auto "
          src={video1}
          loop
          muted
          autoPlay
        ></video>
      </button>
      {isOpen && (
        <dialog
          open
          className="z-50 !w-full fixed h-full top-0 bottom-0 left-0 bg-transparent "
        >
          <iframe
            className="m-auto bottom-0 top-0 left-0 right-0 absolute w-full  aspect-video rounded-3xl  border-0 bg-black"
            src={youtube_url_1}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>

          <button
            className="fixed -top-6 -right-6 bg-gradient-to-r from-[#030f33] to-[#4e737a] rounded-full  z-80 p-2 close-button "
            onClick={closeDialog}
          >
            <img src={close.src} alt="close button" />
          </button>
        </dialog>
      )}
    </article>
  );
}
