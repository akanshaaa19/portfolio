import Nav from "./components/Nav";
import Home from './components/Home';
import About from './components/About';
import SkillsComponent from "./components/Skills";
import Projects from './components/Projects';
// import Footer from './components/Footer';
import Footer from "./components/Footer-div-modal";
import './styles/App.css';
import { useState } from "react";


function App() {

  const [footer, setFooter] = useState(false);
  function clickHandeler(){
    setFooter(!footer)
  }

  return (
    <div>
          <Nav />
          <Home />
          <About />
          <SkillsComponent />
          <Projects />
          <button onClick={clickHandeler} className="footer-button"><i class="fa-solid fa-circle-user fa-2xl"></i></button>
          {footer && <Footer />}
    </div>

  );
}

export default App;
