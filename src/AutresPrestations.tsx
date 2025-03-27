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
          <h2>Méditation</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            eaque. Similique illo expedita quae facere aut, incidunt esse itaque
            saepe alias, architecto nisi dignissimos officiis nihil officia
            quibusdam harum iure.
          </p>
          <h2>Massage et soins énergétiques</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            eaque. Similique illo expedita quae facere aut, incidunt esse itaque
            saepe alias, architecto nisi dignissimos officiis nihil officia
            quibusdam harum iure.
          </p>
          <h2>Coaching Holistique</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            eaque. Similique illo expedita quae facere aut, incidunt esse itaque
            saepe alias, architecto nisi dignissimos officiis nihil officia
            quibusdam harum iure.
          </p>
          <h2>Sauna | Hammam</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            eaque. Similique illo expedita quae facere aut, incidunt esse itaque
            saepe alias, architecto nisi dignissimos officiis nihil officia
            quibusdam harum iure.
          </p>
        </div>
      </div>
    </>
  );
}

export default AutresPrestations;
