import "./App.css";
import "./Contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import river from "./assets/contact-photo.jpeg";

function Contact() {
  return (
    <>
      <div className="Contact" id="contact-section">
        <div className="contact-text">
          <h1>Contact</h1>
          <p className="contact-details">
            Rendez-moi visite à{" "}
            <a href="https://v-forme.fr/" target="_blank" rel="noreferrer">
              V-Forme
            </a>
            , Carcès
          </p>
          <p className="contact-details">
            <BsFillTelephoneFill className="contact-icon" />
            04 94 04 20 75
            <br />
            <BsFillTelephoneFill className="contact-icon" />
            06 11 11 73 23
            <br />
            <MdEmail className="contact-icon" />
            c.essentiellecarces@hotmail.com
          </p>
        </div>
        <div className="contact-image">
          <img className="freedom" src={river} alt="freedom in nature" />
        </div>
      </div>
    </>
  );
}

export default Contact;
