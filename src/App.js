import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Base from './Base/Base';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import About from './Components/About';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Topbar from './Components/Topbar';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
    <Switch>
    <Route exact path="/">
    <Base/>
    </Route>
    <Route path="/about">
    <Topbar/>
    <About/>
    <Footer/>
    </Route>
    <Route path="/skills">
    <Topbar/>
    <Skills/>
    <Footer/>
    </Route>
    <Route path="/work">
    <Topbar/>
    <Work/>
    <Footer/>
    </Route>
    <Route path="/contact">
    <Topbar/>
    <Contact/>
    <Footer/>
    </Route>
    </Switch>
    </div>
  );
}

export default App;
