import "./App.css";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="Footer">
        <div className="address">
          <h4>Studio de Yoga :</h4>
          <p>Rez-de-chaussée de V-Forme</p>
          <p>ZA Les Praderies</p>
          <p>83570 Carcès</p>
        </div>
        <div className="address">
          <h4>Réseaux sociaux :</h4>
          <p>
            <a
              href="https://www.facebook.com/djenny.bicep"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </p>
          <p>
            <a
              href="https://www.instagram.com/marguerittedesiles_/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              href="https://www.tiktok.com/@userfytllk7yau"
              target="_blank"
              rel="noreferrer"
            >
              TikTok
            </a>
          </p>
        </div>
        <div className="address">
          <h4>Site web :</h4>
          <p>
            Ce site web a été créé avec amour par{" "}
            <a href="https://varstar-web.com/" target="_blank" rel="noreferrer">
              Varstar
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
