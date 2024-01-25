import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Base from "./Base/Base";
import { Route } from "react-router-dom/cjs/react-router-dom";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Topbar from "./Components/Topbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Base />
        </Route>
        <Route path="/about">
          <Topbar />
          <About />
        </Route>
        <Route path="/skills">
          <Topbar />
          <Skills />
        </Route>
        <Route path="/work">
          <Topbar />
          <Work />
        </Route>
        <Route path="/contact">
          <Topbar />
          <Contact />
          
        </Route>
      </Switch>
      <div className="footer">
        <div className="footer-items">
          <a href="https://github.com/karthikn25" target="blank">
            <i class="bx bxl-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/karthikeyan-m-48310a279/"
            target="blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>
          <h3>Copyright©kkn2023</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
