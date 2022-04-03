import { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

const iconStyles = {
  color: "#fff",
  fontSize: "30px"
}

export default function Intro() {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef(null);

  const handleVideo = () => {
    setPlayVideo(prev => !prev);

    if(playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }

  return (
    <section id="intro" className="app__video">
      <video
        src="/meal.mp4"
        type="video/mp4"
        ref={videoRef}
        loop
        muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo
            ? <BsPauseFill {...iconStyles} />
            : <BsFillPlayFill {...iconStyles} />
          }
        </div>
      </div>
    </section>
  );
}