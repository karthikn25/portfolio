import React from 'react';
import img2 from "../images/about.jpg";
import { Typewriter} from"react-simple-typewriter";


export default function About() {
    const handleDone = () => {
        console.log(`Done after 10 loops!`)
      }
    return (
        
    <section className='about'>
    
    <div className='container'>
    <div className='row'>
    <div className='section-title padd-15' style={{textAlign:"center" }}>
    <h2>About me</h2>
    </div>
    <div className='row'>
    <div className='about-content padd15'>
    <div className='row'>
    <div className='about-text padd-15'>
    <h3>I'm Karthikeyan and I'm a {' '}
    <span style={{fontWeight:"bold",color:"#12f7ff"}} >
    <Typewriter
    words={['FrontEnd Developer', 'BackEnd Developer', 'FullStack Developer']}
    loop={10}
    cursor
    cursorStyle='|'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
    onLoopDone={handleDone}/>
    </span></h3>
    <p>I'm a self-taught web developer and Mobile App Developer with experience in designing new features from ideation to production, implementation of wireframes and design flows into high performance software applications. I take into consideration the user experience while writing reusable and efficient code. I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release.Currently, I'm focused on the backend development.</p>
    </div>
    </div>
    <div className='row'>
    <div className='personal-info padd-15'>
    <div className='row'>
    <div className='info-item padd-15'>
    <p>Birthdate : <span><Typewriter
    words={['25 Jan 2001']}
    loop={10}
    cursor
    cursorStyle='|'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
    onLoopDone={handleDone}/></span></p>
    </div>
    <div className='info-item padd-15'>
    <p>Age : <span><Typewriter
    words={['22']}
    loop={10}
    cursor
    cursorStyle='|'
    typeSpeed={150}
    deleteSpeed={150}
    delaySpeed={100}
    onLoopDone={handleDone}/></span></p>
    </div>
    <div className='info-item padd-15'>
    <p>Email : <span>mkarthikeyan179@gmail.com</span></p>
    </div>
    <div className='info-item padd-15'>
    <p>Degree : <span>BE(ECE)</span></p>
    </div>
    <div className='info-item padd-15'>
    <p>Phone : <span><Typewriter
    words={['+91-6379445834']}
    loop={10}
    cursor
    cursorStyle='|'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
    onLoopDone={handleDone}/></span></p>
    </div>
    <div className='info-item padd-15'>
    <p>City : <span><Typewriter
    words={['Chennai']}
    loop={10}
    cursor
    cursorStyle='|'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
    onLoopDone={handleDone}/></span></p>
    </div>
    
    </div>
    </div>
    <div className='img2 padd-15'>
    <div className='row'>
    <div className='about-img' style={{marginTop:"40px",marginLeft:"20px"}}>
    <img src={img2} alt='' style={{height:'200px',width:"400px"}}/>
    </div>
    
    </div>
    </div>
    </div>
    <div className='row'>
    <div className='education padd-15'>
    <h3 className='title'>Education</h3>
    <div className='row'>
    
    <div className='timeline-box padd-15'>
    <div className='timeline'>
    
     <div className='timeline-item'>
     <div className='circle-dot'>
     <h3 className='timeline-date'>
     <span class="material-symbols-outlined">calendar_today</span>2015-2016
     </h3>
     <h4 className='timeline-title'>SSLC</h4>
     <p className='timeline-text'>I am Completed my Secondary School Leaving Certificate with 91%.</p>
     </div>
     </div>
     <div className='timeline-item'>
     <div className='circle-dot'>
     <h3 className='timeline-date'>
     <span class="material-symbols-outlined">calendar_today</span>2017-2018
     </h3>
     <h4 className='timeline-title'>HSC</h4>
     <p className='timeline-text'>I am Completed my Higher Secondary Education Certificate with 81%.</p>
     </div>
     </div>
     <div className='timeline-item'>
     <div className='circle-dot'>
     <h3 className='timeline-date'>
     <span class="material-symbols-outlined">calendar_today</span>2018-2022
     </h3>
     <h4 className='timeline-title'>BE(ECE)</h4>
     <p className='timeline-text'>I am Completed my Bachelor of Engineering with 75%.</p>
     </div>
     </div>
    </div>
    </div>
    </div>
    </div>
    <div className='experience padd-15'>
    <h3 className='title'>Experience</h3>
    <div className='row'>
    
    <div className='timeline-box padd-15'>
    <div className='timeline'>
     <div className='timeline-item'>
     <div className='circle-dot'>
     <h3 className='timeline-date'>
     <span class="material-symbols-outlined">calendar_today</span>2022
     </h3>
     <h4 className='timeline-title'>Wipro Infrastructure</h4>
     <p className='timeline-text'>I'm Checking the In and Out products are same in Invoice and Delivery Challan documents.</p>
     </div>
     </div>
     <div className='timeline-item'>
     <div className='circle-dot'>
     <h3 className='timeline-date'>
     <span class="material-symbols-outlined">calendar_today</span>2022-2023
     </h3>
     <h4 className='timeline-title'>Sanmina</h4>
     <p className='timeline-text'>I'm doing Vitrox machine finetuning and In circuit test and Function Component test and checking soldring levels of the products.</p>
     </div>
     </div>
    
    </div>
    </div>
    </div>
    </div>
    </div>

    </div>
    </div>
    </div>
    </div>
    

   
  </section>
  )
}
