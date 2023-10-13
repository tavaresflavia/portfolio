import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import CardList from "./components/CardList/CardList";
import Hero from "./components/Hero/Hero.js";
import Navbar from "./components/Navbar/Navbar";

function App() {

  return (
    <BrowserRouter>
      <main className="app">
        <Navbar />
        <Hero />
        <CardList />
      </main>
    </BrowserRouter>
  );
}

export default App;
