import SideNav from "./components/SideNav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import GoToTop from "./GoToTop";


function App() {
  return (
    <div className="main">
      <SideNav />
      <div className="content">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <GoToTop />
    </div>
  );
}

export default App;
