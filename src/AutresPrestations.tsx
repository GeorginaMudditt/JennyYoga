import "./App.css";
import "./AutresPrestations.css";
import meditation from "./assets/meditation-new.jpeg";
import massage from "./assets/massage-new.jpeg";
import coaching from "./assets/coaching-new.jpeg";
import sauna from "./assets/sauna-hammam-new.jpeg";

function AutresPrestations() {
  return (
    <>
      <div className="AutresPrestations">
        <div className="text-container">
          <h1>Autres Prestations</h1>

          <div className="container">
            <img
              className="meditation-image"
              src={meditation}
              alt="meditation area"
            />
            <div className="meditation-description">
              <h2 id="meditation-section">Méditation</h2>
              <p>
                La méditation est une pratique de pleine conscience et de voyage
                intérieur; de lacher prise, guider par ma voix, sons, musique,
                par la respiration et la visualisation. Apaise l’esprit et
                favorise la clarté mentale. Cette pratique permet la réduction
                du stress, améliore la concentration, cultive la paix
                intérieure, équilibre les émotions et renforce le bien-être.
              </p>
            </div>
          </div>
          <div className="meditation-info">
            <p>
              Séance particulière, collectifs ou en groupe au Studio sur
              réservation
            </p>
            <a
              className="btn meditation"
              href="mailto:vformeholistique@outlook.fr"
            >
              Contactez-moi
            </a>
          </div>

          <div className="container">
            <div className="massage-description">
              <h2 id="massage-section">Massage et soins énergétiques</h2>
              <p>
                Le massage ( massage des 5 continents, massage énergétique et
                Holistique aux huiles essentielles). Les soins énergétiques, et
                le magnétisme, pour rétablir l’équilibre physique et
                énergétique. Ces 2 prestations permettent de soulager les
                tensions, apaisent le corps, l’esprit et les émotions en
                rééquilibrant les flux énergétiques. Apaise le stress, soulage
                certaines pathologies (sans remplacer par un suivi et traitement
                médical) et favorise une profonde relaxation.
              </p>
            </div>
            <img className="massage-image" src={massage} alt="massage area" />
          </div>
          <div className="massage-info">
            <p>Sur réservation au Studio, espace Massage</p>
            <p>De jeudi à samedi</p>
            <a
              className="btn massages"
              href="mailto:vformeholistique@outlook.fr"
            >
              Contactez-moi
            </a>
          </div>

          <div className="container">
            <img
              className="coaching-image"
              src={coaching}
              alt="holistic coaching"
            />
            <div className="coaching-description">
              <h2 id="coaching-section">Coaching Holistique</h2>
              <p>
                Le coaching holistique accompagne vers la réalisation de soi et
                la puissance créative. Déprogrammation, développement personnel
                en intégrant l’esprit, le corps et les émotions. Accompagnement
                et à l'introspection, pour trouver l’équilibre, surmonter les
                défis et atteindre ses objectifs, pour favoriser le bien-être,
                l'épanouissement et la manifestation positif et de la joie
                intérieure.
              </p>
            </div>
          </div>
          <div className="coaching-info">
            <p>Sur rdv et consultation au Studio</p>
            <a
              className="btn coaching"
              href="mailto:vformeholistique@outlook.fr"
            >
              Contactez-moi
            </a>
          </div>

          <div className="container">
            <div className="sauna-description">
              <h2 id="sauna-section">Sauna | Hammam</h2>
              <p>
                Le sauna et le hammam sont des thérapies de relaxation par la
                chaleur qui détoxifient le corps et procurent une détente
                profonde. Le sauna diffuse une chaleur sèche, tandis que le
                hammam offre de la vapeur. Ils améliorent la circulation,
                accélére le métabolisme, soulagent les tensions musculaires et
                purifient la peau et votre organisme, favorisant le bien-être.
              </p>
            </div>
            <img className="sauna-image" src={sauna} alt="sauna" />
          </div>
          <div className="sauna-info">
            <p>Sur réservation au Studio, espace Spa</p>
            <p>De lundi à vendredi 10h à 19h | Samedi 10h à 12h30</p>
            <a className="btn sauna" href="mailto:vformeholistique@outlook.fr">
              Contactez-moi
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AutresPrestations;
