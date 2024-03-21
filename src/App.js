import "./App.css";
import Behind from "./components/Behind";
import Companies from "./components/Companies";
import Contact from "./components/Contact";
import FirstGame from "./components/FirstGame";
import Footer from "./components/Footer";
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
      <Companies />
      <FirstGame />
      <GamingExperience />
      <MakeMove />
      <RichWorld />
      <Behind />
      <Next />
      <MyRoadmap />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
