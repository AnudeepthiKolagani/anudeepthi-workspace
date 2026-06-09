import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import ProjectJourney from "./components/ProjectJourney";
import ExperienceTimeline from "./components/ExperienceTimeline";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectJourney />
      <ExperienceTimeline />
    </div>
  );
}

export default App;
