import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import CardList from "./components/CardList/CardList";
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
        <CardList />
      </main>
    </BrowserRouter>
  );
}

export default App;
