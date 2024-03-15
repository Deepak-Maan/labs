import "./App.css";
import Behind from "./components/Behind";
import Contact from "./components/Contact";
import GamingExperience from "./components/GamingExperience";
import Hero from "./components/Hero";
import MakeMove from "./components/MakeMove";
import Nav from "./components/Nav";
import RichWorld from "./components/RichWorld";

function App() {
  return (
    <div>
      <div className="bg-hero">
        <Nav />
        <Hero />
      </div>
      <GamingExperience />
      <MakeMove />
      <RichWorld />
      <Behind />
      <Contact />
    </div>
  );
}

export default App;
