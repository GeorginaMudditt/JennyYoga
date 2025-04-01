import "./App.css";
import "./Contact.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import danse from "./assets/danse.jpg";

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
            Réservez sur{" "}
            <a href="https://www.planity.com/" target="_blank" rel="noreferrer">
              Planity
            </a>
          </p>
          <p className="contact-details">
            <BsFillTelephoneFill className="contact-icon" />
            00 00 00 00 00
            <br />
            <MdEmail className="contact-icon" />
            jennyraymax@live.fr
          </p>
        </div>
        <div className="contact-image">
          <img className="freedom" src={danse} alt="freedom in nature" />
        </div>
      </div>
    </>
  );
}

export default Contact;
