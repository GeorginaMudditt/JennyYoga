import "./App.css";
import "./AutresPrestations.css";
import meditation from "./assets/meditation-new.jpeg";

function AutresPrestations() {
  return (
    <>
      <div className="AutresPrestations">
        <div className="massage-text">
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
          </div>
          {/* <button className="btn meditation">Plus d'informations</button> */}
          <h2 id="massage-section">Massage et soins énergétiques</h2>
          <p>
            Le massage ( massage des 5 continents, massage énergétique et
            Holistique aux huiles essentielles). Les soins énergétiques, et le
            magnétisme, pour rétablir l’équilibre physique et énergétique. Ces 2
            prestations permettent de soulager les tensions, apaisent le corps,
            l’esprit et les émotions en rééquilibrant les flux énergétiques.
            Apaise le stress, soulage certaines pathologies (sans remplacer par
            un suivi et traitement médical) et favorise une profonde relaxation.
          </p>
          <div className="massage-info">
            <p>Sur réservation au Studio, espace Massage</p>
          </div>
          {/* <button className="btn massages">Plus d'informations</button> */}
          <h2 id="coaching-section">Coaching Holistique</h2>
          <p>
            Le coaching holistique accompagne vers la réalisation de soi et la
            puissance créative. Déprogrammation, développement personnel en
            intégrant l’esprit, le corps et les émotions. Accompagnement et à
            l'introspection, pour trouver l’équilibre, surmonter les défis et
            atteindre ses objectifs, pour favoriser le bien-être,
            l'épanouissement et la manifestation positif et de la joie
            intérieure.
          </p>
          <div className="coaching-info">
            <p>Sur rdv et consultation au Studio</p>
          </div>
          {/* <button className="btn coaching">Plus d'informations</button> */}
          <h2 id="sauna-section">Sauna | Hammam</h2>
          <p>
            Le sauna et le hammam sont des thérapies de relaxation par la
            chaleur qui détoxifient le corps et procurent une détente profonde.
            Le sauna diffuse une chaleur sèche, tandis que le hammam offre de la
            vapeur. Ils améliorent la circulation, accélére le métabolisme,
            soulagent les tensions musculaires et purifient la peau et votre
            organisme, favorisant le bien-être.
          </p>
          <div className="sauna-info">
            <p>Sur réservation au Studio, espace Spa</p>
          </div>
          {/* <button className="btn sauna">Plus d'informations</button> */}
        </div>
      </div>
    </>
  );
}

export default AutresPrestations;
