import React from 'react'

export default function Topbar() {
  return (
    <div className='top-bar'>
    <header>
    <div className='logo'><span>K</span>arthiKn.</div>
    <ul className='navlist'>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a href="/skills">Skills</a></li>
    <li><a href="/work">Work</a></li>
    <li><a href="/contact">Contact</a></li>
    </ul>
    <div id='menu-icon' className='bx bxl-github'></div>
    
    </header>
    </div>
  )
}
