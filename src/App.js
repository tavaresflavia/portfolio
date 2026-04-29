import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import ProjectList from "./components/ProjectList/ProjectList";
import Hero from "./components/Hero/Hero.js";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import CurrentWork from "./components/CurrentWork/CurrentWork";
import CaseStudy from "./components/CaseStudy/CaseStudy";

function App() {

  return (
    <BrowserRouter>
      <main className="app">
        <Navbar />
        <Hero />
        <CurrentWork />
        <CaseStudy />
        <Skills/>
        <ProjectList />
      </main>
    </BrowserRouter>
  );
}

export default App;
