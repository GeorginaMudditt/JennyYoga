import "./App.css";
import "./Header.css";
import yogi from "./assets/yogi.png";

function Header() {
  return (
    <>
      <div className="Header">
        <nav className="navbar navbar-expand-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img className="yogi-navbar" src={yogi} alt="yogi icon" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#jenny-section"
                  >
                    D'jenny
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Yoga
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#stretch-flow-section">
                        Stretch Flow
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#vinyasa-section">
                        Vinyasa
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#postural-section">
                        Yoga Fit
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#yin-section">
                        Yin yoga
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#dance-section">
                        Yoga danse
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Autres Prestations
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#meditation-section">
                        Méditation
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#massage-section">
                        Massage et soins énergétiques
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#coaching-section">
                        Coaching Holistique
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#sauna-section">
                        Sauna | Hammam
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact-section">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
