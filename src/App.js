import "./App.css";
import Behind from "./components/Behind";
import Contact from "./components/Contact";
import FirstGame from "./components/FirstGame";
import GamingExperience from "./components/GamingExperience";
import Hero from "./components/Hero";
import MakeMove from "./components/MakeMove";
import Nav from "./components/Nav";
import Next from "./components/Next";
import RichWorld from "./components/RichWorld";
import MyRoadmap from "./components/Roadmap";

function App() {
  return (
    <div>
      <div className="bg-hero">
        <Nav />
        <Hero />
      </div>
      <FirstGame />
      <GamingExperience />
      <MakeMove />
      <RichWorld />
      <Behind />
      <Next />
      <MyRoadmap />
      <Contact />
    </div>
  );
}

export default App;
