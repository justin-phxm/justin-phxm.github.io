import NavBar from "./NavBar.tsx";
import Footer from "./Footer.tsx";
// import Game from "./Game.tsx";
// import devInfo from "../devInfo.json";
// import { RxCrossCircled } from "react-icons/rx";
import { Router, Route } from "preact-router";
import Home from "./_hello/Home.tsx";
import AboutMe from "./_about-me/AboutMe.tsx";
import Projects from "./_projects/Projects.tsx";
import Contact from "./_contact-me/Contact.tsx";
export function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Route path="/" component={Home} />
        {/* <Home path="/" /> */}
        <Route path="/about-me" component={AboutMe} />
        {/* <AboutMe path="/about-me" /> */}
        <Projects path="/projects" />
        <Contact path="/contact" />
      </Router>
      <Footer />
    </>
  );
}
