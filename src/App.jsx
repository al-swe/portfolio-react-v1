import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div>
      <Hero />
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
