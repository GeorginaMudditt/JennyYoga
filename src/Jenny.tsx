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
          <h1>Je suis Jenny</h1>
          <p className="jenny-intro-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore
            rerum illum consectetur. Fugiat consequuntur debitis tempora ut,
            cumque eaque deleniti dolores minus quis mollitia soluta. Quidem
            nemo in minus blanditiis?
          </p>
        </div>
      </div>
    </>
  );
}

export default Jenny;
