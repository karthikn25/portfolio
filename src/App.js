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
    <div className='footer'><div className='footer-items'>
    <a href='https://www.facebook.com/profile.php?id=100013637074416' target='blank'><i class='bx bxl-facebook'></i></a>
    <a href='https://www.instagram.com/karthikn75/' target='blank'><i class='bx bxl-instagram' ></i></a>
    <a href='https://twitter.com/M6029' target='blank'><i class='bx bxl-twitter' ></i></a>
    <a href='https://github.com/karthikn25' target='blank'><i class='bx bxl-github'></i></a>
    <a href='https://www.linkedin.com/in/karthikeyan-m-48310a279/' target='blank'><i class='bx bxl-linkedin'></i></a>
    <h3>Copyright©kkn2023</h3>
    </div></div>
    </div>
  );
}

export default App;
