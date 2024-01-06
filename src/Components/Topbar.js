import React from 'react';
import {Link} from 'react-router-dom'

export default function Topbar() {
  return (
    <div className='top-bar'>
    <header>
    <div className='logo'><span>K</span>arthiKn.</div>
    <ul className='navlist'>
    <li><div className='nav-items'><Link to="/" style={{color:"#12f7ff"}}>Home</Link></div></li>
    <li><div className='nav-items' ><Link to="/about" style={{color:"#12f7ff"}}>About</Link></div></li>
    <li><div className='nav-items'><Link to="/Skills" style={{color:"#12f7ff"}}>Skills</Link></div></li>
    <li><div className='nav-items'><Link to="/work" style={{color:"#12f7ff"}}>Work</Link></div></li>
    <li><div className='nav-items'><Link to="/contact" style={{color:"#12f7ff"}}>Contact</Link></div></li>
    </ul>
    <div id='menu-icon' className='social-icons' style={{width:'50px',marginTop:'5px'}}><a href='https://github.com/karthikn25/portfolio' target='blank'><i class='bx bxl-github'></i></a></div>
    
    </header>
    
    </div>
    
   
  )
}
