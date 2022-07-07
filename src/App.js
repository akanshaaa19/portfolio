import Nav from "./components/Nav";
import Home from './components/Home';
import About from './components/About';
import SkillsComponent from "./components/Skills";
import Projects from './components/Projects';
import './styles/App.css';


function App() {
  return (
    <div>
          <Nav />
          <Home />
          <About />
          <SkillsComponent />
          <Projects />
    </div>

  );
}

export default App;
