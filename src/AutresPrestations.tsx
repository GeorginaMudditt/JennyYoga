import "./App.css";
import "./AutresPrestations.css";
import massage from "./assets/massage2.jpg";

function AutresPrestations() {
  return (
    <>
      <div className="AutresPrestations">
        <div className="massage-image">
          <img className="massage" src={massage} alt="back massage" />
        </div>
        <div className="massage-text">
          <h1>Autres Prestations</h1>
          <h2 id="meditation-section">Méditation</h2>
          <p>
            La méditation est une pratique de concentration qui apaise l’esprit
            et favorise la clarté mentale. Par la respiration, la visualisation
            ou la pleine conscience, elle réduit le stress, améliore la
            concentration et cultive la paix intérieure. Une pratique régulière
            équilibre les émotions et renforce le bien-être.
          </p>
          <button className="btn">Plus d'informations</button>
          <h2 id="massage-section">Massage et soins énergétiques</h2>
          <p>
            Le massage et les soins énergétiques allient le toucher et des
            techniques holistiques pour rétablir l’équilibre physique et
            énergétique. Par la pression, le mouvement ou le travail
            énergétique, ils soulagent les tensions, améliorent la circulation
            et harmonisent le flux naturel du corps, favorisant détente et
            bien-être.
          </p>
          <button className="btn">Plus d'informations</button>
          <h2 id="coaching-section">Coaching Holistique</h2>
          <p>
            Le coaching holistique accompagne le développement personnel en
            intégrant l’esprit, le corps et les émotions. Par l’accompagnement
            et l’introspection, il aide à trouver l’équilibre, surmonter les
            défis et atteindre ses objectifs, favorisant bien-être et
            épanouissement.
          </p>
          <button className="btn">Plus d'informations</button>
          <h2 id="sauna-section">Sauna | Hammam</h2>
          <p>
            Le sauna et le hammam sont des thérapies de relaxation par la
            chaleur qui détoxifient le corps et procurent une détente profonde.
            Le sauna diffuse une chaleur sèche, tandis que le hammam offre de la
            vapeur. Ils améliorent la circulation, soulagent les tensions
            musculaires et purifient la peau, favorisant le bien-être.
          </p>
          <button className="btn">Plus d'informations</button>
        </div>
      </div>
    </>
  );
}

export default AutresPrestations;
