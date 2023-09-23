import NavBar from "./NavBar.tsx";
import Footer from "./Footer.tsx";
// import Game from "./Game.tsx";
// import devInfo from "../devInfo.json";
// import { RxCrossCircled } from "react-icons/rx";
import { Router } from "preact-router";
import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import Projects from "./Projects.tsx";
import Contact from "./Contact.tsx";

export function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Home path="/" />
        <AboutMe path="/about-me" />
        <Projects path="/projects" />
        <Contact path="/contact" />
      </Router>
      <Footer />
    </>
  );
}
