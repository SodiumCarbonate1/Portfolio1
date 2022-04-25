import Contact from "./components/Contact/Contact";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import Menu from "./components/menu/Menu";
import "./app.scss";
import {useState} from "react";
import Projects from "./components/projects/Project";
import Sndproject from "./components/sndproject/Sndproject";


function App() {
    const [menuOpen,setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>        
        <Testimonials/>
        <Works/>
        <Portfolio/>
        <Projects/>
        <Sndproject/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
