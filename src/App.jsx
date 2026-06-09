import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import ProjectJourney from "./components/ProjectJourney";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectJourney />
    </div>
  );
}

export default App;
