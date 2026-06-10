import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import ProjectJourney from "./components/ProjectJourney";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="bg-dark text-body">
      <NavBar />
      <Home />
      <About />
      <ProjectJourney />
      <ExperienceTimeline />
      <ContactSection />
    </div>
  );
}

export default App;
