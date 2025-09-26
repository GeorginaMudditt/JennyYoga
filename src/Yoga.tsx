import "./App.css";
import "./Yoga.css";
import dance from "./assets/yoga-danse.jpeg";
import lotus from "./assets/crossed-legs.jpg";
import yoga2 from "./assets/yoga-new2.jpeg";
import yogafit from "./assets/yoga-fit.jpeg";
import stretchflow from "./assets/stretch-flow.jpeg";

function Yoga() {
  return (
    <>
      <div className="Yoga" id="yoga-section">
        <div className="yoga-text">
          <h1>Yoga</h1>

          <div className="postural-container">
            <div className="yoga-description">
              <h2 id="stretch-flow-section">Stretch Flow</h2>
              <p>
                Le Stretch Flow® est un enchaînement chorégraphié composé de
                différents styles d’étirements, de pas de danse et de mouvements
                fluides, le tout en harmonie sur des musiques entraînantes. Les
                séquences s’enchaînent de manière fluide et ininterrompue grâce
                au flow, créant ainsi un espace où le temps semble s’arrêter et
                où chaque geste devient une expression de soi. Cette pratique se
                déploie à travers des positions variées : debout, à quatre
                pattes, assises et allongées. Les différentes techniques
                d’étirement utilisées incluent : le balistique, le dynamique,
                l’actif et le passif. La chorégraphie est évolutive, permettant
                à chaque participant de progresser à son propre rythme. Aucune
                expérience préalable en danse ou en souplesse n’est requise :
                chaque participant est libre d’évoluer selon ses aptitudes et de
                savourer l’instant présent.
              </p>
            </div>
            <img
              className="postural-yoga-image"
              src={stretchflow}
              alt="yoga fit"
            />
          </div>
          <div className="postural-info">
            <p className="postural-text">
              Tous les mercredis à 18h à V-Forme Carcès
            </p>
            <p className="postural-text">
              Cours particulier ou en groupe au Studio sur réservation
            </p>
            <a
              className="btn postural"
              href="mailto:vformeholistique@outlook.fr"
            >
              Contactez-moi
            </a>
          </div>

          <div className="vinyasa-container">
            <img
              className="vinyasa-yoga-image"
              src={yoga2}
              alt="vinyasa yoga"
            />
            <div className="yoga-description">
              <h2 id="vinyasa-section">Vinyasa</h2>
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
              Tous les mercredis à 19h à V-Forme Carcès
            </p>
            <p className="vinyasa-text">
              Cours particulier ou en groupe au Studio sur réservation
            </p>
            <a
              className="btn vinyasa"
              href="mailto:vformeholistique@outlook.fr"
            >
              Contactez-moi
            </a>
          </div>

          <div className="postural-container">
            <div className="yoga-description">
              <h2 id="postural-section">Yoga Fit</h2>
              <p>
                Le Yoga Fit va vous offrir une approche complète qui allie la
                yoga, la fitness et pilates. Chaque séance vous permet de
                tonifier l'ensemble de votre corps, de gagner en souplesse et en
                force, tout en améliorant votre endurance. En pratiquant
                régulièrement, vous verrez votre posture s'améliorer et vous
                sentirez plus aligné, aussi bien physiquement que mentalement.
                Travail de vos muscles en profondeur, renforcement de vos
                abdominaux et apprendrez à bouger en pleine conscience, tout en
                favorisant la détente et la gestion du stress. Le Yoga Fit est
                conçu pour vous faire évoluer à votre rythme, en vous offrant un
                entraînement équilibré qui améliore à la fois votre force
                intérieure et extérieure. Pratique dynamique et harmonieuse,
                l'opportunité idéale pour explorer une nouvelle façon de bouger,
                qui transforme à la fois votre corps et votre mental.
              </p>
            </div>
            <img className="postural-yoga-image" src={yogafit} alt="yoga fit" />
          </div>
          <div className="postural-info">
            <p className="postural-text">
              Tous les mardis à 18h à V-Forme Carcès
            </p>
            <p className="postural-text">
              Cours particulier ou en groupe au Studio sur réservation
            </p>
            <a
              className="btn postural"
              href="mailto:vformeholistique@outlook.fr"
            >
              Contactez-moi
            </a>
          </div>

          <div className="yin-container">
            <img className="yin-yoga-image" src={lotus} alt="yin yoga" />
            <div className="yoga-description">
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
            <p className="yin-text">
              Cours particulier ou en groupe au Studio sur réservation
            </p>
            <p className="yin-text">
              Consultez ma page{" "}
              <a
                className="fb-link"
                href="https://www.facebook.com/DjenFlow"
                target="_blank"
              >
                Facebook
              </a>{" "}
              pour les événements à venir
            </p>
            <a className="btn yin" href="mailto:vformeholistique@outlook.fr">
              Contactez-moi
            </a>
          </div>

          <div className="danse-container">
            <div className="yoga-description">
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
            <p className="danse-text">
              Tous les lundis à 18h et mardis à 19h15 à V-Forme Carcès
            </p>
            <p className="danse-text">
              Cours particulier ou en groupe au Studio sur réservation
            </p>
            <a className="btn danse" href="mailto:vformeholistique@outlook.fr">
              Contactez-moi
            </a>
          </div>
        </div>
        <div className="yoga-image"></div>
      </div>
    </>
  );
}

export default Yoga;
