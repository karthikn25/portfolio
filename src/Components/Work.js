import React from 'react';
import img5 from '../images/work1.jpg';
import img6 from '../images/work2.jpg';
import img7 from '../images/work3.jpg';


export default function Work() {
  return (
    <section className='work'>
    
    <div className='container'>
    <div className='row'>
    <div className='section-title ' style={{textAlign:"center"}}>
    <h2>Work</h2>
    </div>
    </div>
    <div className='row project-box'>
    <div className='col-3'>
    <div className='project-items'>
     <h3 style={{textAlign:'center'}}>CRUD APP</h3>  
     <img src={img5} alt='' style={{height:'150px',width:'180px',marginLeft:'60px'}}/>
     <div className='btn-box'>
     <button className='btn'>
     <a href='https://fastidious-swan-379d6a.netlify.app' target='blank' className='bx bxl-netlify'>Demo Link</a>
     </button>
     <button className='btn'>
     <a href='https://github.com/karthikn25/day32task'className='bx bxl-github' target='blank'>Github Link</a>
     </button>
     </div>    
    </div>   
    </div>
    <div className='col-3'>
    <div className='project-items'>
    <h3 style={{textAlign:'center'}}>SHOP HOME PAGE</h3>
    <img src={img6} alt='' style={{height:'150px',width:'180px',marginLeft:'60px'}}/> 
    <div className='btn-box'>
     <button className='btn'>
     <a href='https://fastidious-swan-379d6a.netlify.app' target='blank' className='bx bxl-netlify'>Demo Link</a>
     </button>
     <button className='btn'>
     <a href='https://github.com/karthikn25/day32task'className='bx bxl-github' target='blank'>Github Link</a>
     </button>
     </div>    
    </div>   
    </div>
    <div className='col-3'>
    <div className='project-items'>
    <h3 style={{textAlign:'center'}}>MONEY MANAGER APP</h3>
    <img src={img7} alt='' style={{height:'150px',width:'180px',marginLeft:'60px'}}/> 
    <div className='btn-box'>
    <button className='btn'>
    <a href='https://fastidious-swan-379d6a.netlify.app' target='blank' className='bx bxl-netlify'>Demo Link</a>
    </button>
    <button className='btn'>
    <a href='https://github.com/karthikn25/day32task'className='bx bxl-github' target='blank'>Github Link</a>
    </button>
    </div>     
    </div>   
    </div>
    </div>
    </div>
    </section>
  )
}
