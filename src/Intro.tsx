import "./App.css";
import "./Intro.css";
import heart_socks from "./assets/heart-socks.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

function Intro() {
  return (
    <>
      <div className="Intro">
        <div className="socials">
          <h1>Jenny Yoga</h1>
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
        </div>
        <img className="heart-socks" src={heart_socks} alt="heart-socks" />
      </div>
    </>
  );
}

export default Intro;
