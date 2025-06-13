import "./App.css";
import "./Yoga.css";
import dance from "./assets/yoga-danse.jpeg";
import lotus from "./assets/crossed-legs.jpg";
import yoga1 from "./assets/yoga-new1.jpeg";
import yoga2 from "./assets/yoga-new2.jpeg";

function Yoga() {
  return (
    <>
      <div className="Yoga" id="yoga-section">
        <div className="yoga-text">
          <h1>Yoga</h1>

          <div className="vinyasa-container">
            <img
              className="vinyasa-yoga-image"
              src={yoga2}
              alt="vinyasa yoga"
            />
            <div>
              <h2>Vinyasa</h2>
              <p>
                Le Vinyasa est un Yoga dynamique, qui conjugue Cardio,
                renforcement musculaire et souplesse. Il relie la respiration au
                mouvement dans une séquence fluide de postures. Il met l’accent
                sur des transitions harmonieuses, renforçant la force, la
                flexibilité et la pleine conscience. Souvent appelé "yoga flow",
                il varie en intensité et favorise l'équilibre, la coordination
                et un état méditatif.
              </p>
            </div>
          </div>
          <div className="vinyasa-info">
            <p className="vinyasa-text">
              Tous les mercredis à 19h à V-Forme Carcès | Cours particulier ou
              en groupe au Studio sur réservation
            </p>
          </div>
          {/* <button className="btn vinyasa">Réserver</button> */}

          <div className="vinyasa-container">
            <div>
              <h2 id="postural-section">Postural</h2>
              <p>
                Le yoga postural, par des exercices de renforcement musculaire,
                gainage et respiration, cette pratique de yoga met l’accent sur
                l’alignement, la force et la flexibilité à travers des postures
                précises. Il favorise une bonne posture, l’équilibre et la
                conscience corporelle, souvent avec des accessoires. Cette
                pratique améliore la stabilité, réduit les tensions et convient
                à tous les niveaux.
              </p>
            </div>
            <img
              className="vinyasa-yoga-image"
              src={yoga1}
              alt="postural yoga"
            />
          </div>
          <div className="postural-info">
            <p className="postural-text">
              Tous les mardis à 18h à V-Forme Carcès | Cours particulier ou en
              groupe au Studio sur réservation
            </p>
          </div>
          {/* <button className="btn postural">Réserver</button> */}

          <div className="yin-container">
            <img className="yin-yoga-image" src={lotus} alt="yin yoga" />
            <div>
              <h2 id="yin-section">Yin yoga</h2>
              <p>
                Le yin yoga est une pratique douce, énergétique et méditative ou
                s’installe l’immobilité et l’introspection. Posture d'étirements
                et de relâchement maintenues plusieurs minutes pour stimuler les
                méridiens et entrer dans une détente profonde et agir sur les
                tissus conjonctifs et fascias. Il améliore la flexibilité, la
                mobilité articulaire et favorise la relaxation et calme le
                système nerveux. Cette pratique méditative équilibre l’énergie,
                réduit le stress et est un très bon complément aux pratiques de
                yoga plus dynamiques et sportives.
              </p>
            </div>
          </div>
          <div className="yin-info">
            <p>
              Cours collectifs à partir de septembre 2025 à V-Forme Carcès |
              Cours particulier ou en groupe au Studio sur réservation
            </p>
          </div>
          {/* <button className="btn yin">Réserver</button> */}

          <div className="danse-container">
            <div>
              <h2 id="dance-section">Yoga danse</h2>
              <p>
                Le yoga danse est une discipline mêlant mouvements de yoga et
                danse. Cette pratique améliore la flexibilité, la coordination
                et la conscience corporelle tout en favorisant la joie et la
                créativité. Union du souffle, musique et mouvement pour une
                expérience libératrice et énergisante.
              </p>
            </div>
            <img className="danse-yoga-image" src={dance} alt="yoga dance" />
          </div>
          <div className="danse-info">
            <p>
              Cours collectifs à partir de septembre 2025 à V-Forme Carcès |
              Cours particulier ou en groupe au Studio sur réservation
            </p>
          </div>
          {/* <button className="btn danse">Réserver</button> */}
        </div>
        <div className="yoga-image"></div>
      </div>
    </>
  );
}

export default Yoga;
