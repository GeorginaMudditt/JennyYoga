import { useState, useRef } from "react";
import "./App.css";
import "./Intro.css";
import heart_socks from "./assets/heart-socks.jpg";
import logo from "./assets/djenny-logo.jpeg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaMusic } from "react-icons/fa";
import { FaVolumeMute } from "react-icons/fa";

function Intro() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio: " + error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <div className="Intro">
        <div className="socials">
          <div className="logo">
            <img className="djenny-logo" src={logo} alt="D'Jenny Flow Logo" />
          </div>
          <a
            href="https://www.facebook.com/djenny.bicep"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare className="socials-icon" />
          </a>
          <a
            href="https://www.instagram.com/marguerittedesiles_/"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareInstagram className="socials-icon" />
          </a>
          <audio ref={audioRef} loop>
            <source src="/piano-yoga-music.mp3" type="audio/mpeg" />
          </audio>
          <button onClick={toggleMusic} className="music-button">
            {isPlaying ? <FaVolumeMute /> : <FaMusic />}
          </button>
        </div>
        <img className="heart-socks" src={heart_socks} alt="heart-socks" />
      </div>
    </>
  );
}

export default Intro;
