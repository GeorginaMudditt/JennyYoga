import "./App.css";
import "./Yoga.css";
import outside from "./assets/yoga-outside.jpg";

function Yoga() {
  return (
    <>
      <div className="Yoga">
        <div className="yoga-text">
          <h1>Yoga</h1>
          <h2>Vinyasa</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            eaque. Similique illo expedita quae facere aut, incidunt esse itaque
            saepe alias, architecto nisi dignissimos officiis nihil officia
            quibusdam harum iure.
          </p>
          <h2>Postural</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            eaque. Similique illo expedita quae facere aut, incidunt esse itaque
            saepe alias, architecto nisi dignissimos officiis nihil officia
            quibusdam harum iure.
          </p>
          <h2>Yin yoga</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            eaque. Similique illo expedita quae facere aut, incidunt esse itaque
            saepe alias, architecto nisi dignissimos officiis nihil officia
            quibusdam harum iure.
          </p>
          <h2>Yoga danse</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            eaque. Similique illo expedita quae facere aut, incidunt esse itaque
            saepe alias, architecto nisi dignissimos officiis nihil officia
            quibusdam harum iure.
          </p>
        </div>
        <div className="yoga-image">
          <img className="outside-yoga" src={outside} alt="outside yoga" />
        </div>
      </div>
    </>
  );
}

export default Yoga;
