import Nav from "./components/Nav";
import Home from './components/Home';
import About from './components/About';
import SkillsComponent from "./components/Skills";
import Projects from './components/Projects';
import Footer from './components/Footer';
import './styles/App.css';


function App() {
  return (
    <div>
          <Nav />
          <Home />
          <About />
          <SkillsComponent />
          <Projects />
          <Footer />
    </div>

  );
}

export default App;
