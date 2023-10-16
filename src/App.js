import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import ProjectList from "./components/ProjectList/ProjectList";
import Hero from "./components/Hero/Hero.js";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";

function App() {

  return (
    <BrowserRouter>
      <main className="app">
        <Navbar />
        <Hero />
        <Skills/>
        <ProjectList />
      </main>
    </BrowserRouter>
  );
}

export default App;
