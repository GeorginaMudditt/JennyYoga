import "./App.css";
import Header from "./Header";
import Intro from "./Intro";
import Jenny from "./Jenny";
import Yoga from "./Yoga";
import AutresPrestations from "./AutresPrestations";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Intro />
        <Jenny />
        <Yoga />
        <AutresPrestations />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
