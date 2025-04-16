import "./App.css";
import "./Jenny.css";
import lotus from "./assets/crossed-legs.jpg";

function Jenny() {
  return (
    <>
      <div className="Jenny">
        <div className="jenny-image">
          <img className="lotus" src={lotus} alt="lotus position" />
        </div>
        <div className="jenny-text">
          <h1 id="jenny-section">D'jenny Flow</h1>
          <p className="jenny-intro-text">
            Je me présente D’jenny, praticienne Holistique et Professeur de
            yoga. Je vous propose de retrouver un équilibre, de vous sentir
            apaiser, revitaliser. «On a tous des moments où l’on en a besoin» et
            je vous propose ma guidance pour ressentir l’harmonie dans tous vos
            corps (physique, mental, émotionnel, spirituel). Je vous invite à
            vous connecter à votre être intérieur.
            <br />
            <br />
            Mon parcours dans le bien-être a commencé il y a presque 10 ans.
            Élève à l’institut Hypotenuse (école de massage) pendant 1 ans, puis
            j’ai continué à me former celons les synchronisitée de la vie. Je me
            suis former en magnétisme et différents soins énergétique puissant.
            Puis j’ai vécu un voyage transformateur lors d’un cours de yoga qui
            m’a conduit vers l’envie d’aller plus loin dans ma pratique, et je
            me suis formé en 2 ans au yoga Vinyasa et yin yoga (250h), ainsi
            qu’une certification en souplesse et handstand. Je suis aussi former
            en nutrition santé, Ayurveda et nathuropatie, et en méditation pour
            un suivi et conseils dans sa globalité.
            <br />
            <br />
            Depuis plusieurs années je propose des moments de lâcher prise. Je
            vous guide pour une reconnexion à soi et à relancer l’énergie vitale
            et de prendre soins de son corps et de son esprit. Je vous guide
            vers des voyages intérieur pour une libération purificatrice,
            l’harmonie et un équilibre. Des guidances transformatrices pour vous
            aider à vous réaliser et à cultiver la gratitude et la paix
            intérieure. Mes prestations vous guideront vers une détente absolue,
            un lâcher prise et une sérénités et joie intérieure.
          </p>
        </div>
      </div>
    </>
  );
}

export default Jenny;
