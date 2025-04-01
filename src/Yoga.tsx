import "./App.css";
import "./Yoga.css";
import standing from "./assets/standing.jpg";

function Yoga() {
  return (
    <>
      <div className="Yoga" id="yoga-section">
        <div className="yoga-text">
          <h1>Yoga</h1>
          <h2>Vinyasa</h2>
          <p>
            Le Vinyasa yoga est un style dynamique qui relie la respiration au
            mouvement dans une séquence fluide de postures. Il met l’accent sur
            des transitions harmonieuses, renforçant la force, la flexibilité et
            la pleine conscience. Souvent appelé "yoga flow", il varie en
            intensité et favorise l'équilibre, la coordination et un état
            méditatif.
          </p>
          <button className="btn vinyasa">Réserver</button>
          <h2 id="postural-section">Postural</h2>
          <p>
            Le yoga postural met l’accent sur l’alignement, la force et la
            flexibilité à travers des postures précises. Il favorise une bonne
            posture, l’équilibre et la conscience corporelle, souvent avec des
            accessoires. Ce style améliore la stabilité, réduit les tensions et
            convient à tous les niveaux.
          </p>
          <button className="btn postural">Réserver</button>
          <h2 id="yin-section">Yin yoga</h2>
          <p>
            Le yin yoga est une pratique lente qui cible les tissus profonds
            avec des postures passives maintenues longtemps. Il améliore la
            flexibilité, la mobilité articulaire et favorise la relaxation. Ce
            style méditatif équilibre l’énergie, réduit le stress et complète
            les pratiques de yoga plus dynamiques.
          </p>
          <button className="btn yin">Réserver</button>
          <h2 id="dance-section">Yoga danse</h2>
          <p>
            Le yoga danse mélange postures de yoga et mouvements rythmiques pour
            une pratique fluide et expressive. Il améliore la flexibilité, la
            coordination et la conscience corporelle tout en favorisant la joie
            et la créativité. Ce style dynamique unit souffle, musique et
            mouvement pour une expérience libératrice et énergisante.
          </p>
          <button className="btn danse">Réserver</button>
        </div>
        <div className="yoga-image">
          <img className="standing-yoga" src={standing} alt="standing yoga" />
        </div>
      </div>
    </>
  );
}

export default Yoga;
