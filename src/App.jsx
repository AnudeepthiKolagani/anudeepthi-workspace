import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
// import ProjectJourney from "./components/ProjectJourney";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactSection from "./components/ContactSection";
import EngineeringMindset from "./components/EngineeringMindset";
function App() {
  return (
    <div className="bg-primary text-dark">
      <NavBar />
      <Home />
      <About />
      <EngineeringMindset />
      {/* TODO: ADD PROJECTS SECTION */}
      {/* <ProjectJourney /> */}
      <ExperienceTimeline />
      <ContactSection />
    </div>
  );
}

export default App;
