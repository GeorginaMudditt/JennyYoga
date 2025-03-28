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
          <h1 id="jenny-section">Je suis D'jenny</h1>
          <p className="jenny-intro-text">
            [ Voici la section pour te présenter. Dis un peu qui tu es, ton
            parcours professionnel/qualifications/expérience, et pourquoi les
            gens devraient venir vers toi ! ]
          </p>
        </div>
      </div>
    </>
  );
}

export default Jenny;
