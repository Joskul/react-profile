import About from "./components/About";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Repositories from "./components/Repositories";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <SocialLinks />
      <About />
      <Repositories />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
