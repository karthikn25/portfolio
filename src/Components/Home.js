import React from 'react';
import img1 from "../images/profile2.jpg";
import { Typewriter} from"react-simple-typewriter";



export default function Home() {
    const handleDone = () => {
        console.log(`Done after 10 loops!`)
      }
    return (
        <section id='home' className='home'>
        
        <div>
          <div className='home-content'>
          <h1>Hi! I'm Karthikeyan</h1>
          <h3>I'm a {' '}
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
          </span>
          
          
          </h3>
          </div>
         
          <p>To put all my efforts and knowledge to ensure the best output and to make the organization to reach great position I work with.</p>
          
          <div className='btn-box'>
          <a href='https://drive.google.com/file/d/16aNlsoja90SWW6TGyDjhnzVjJiaMUofB/view?usp=drive_link' className='btn' target='blank'>Download CV</a>
          <a href='https://www.linkedin.com/in/karthikeyan-m-48310a279/' target='blank' className='btn'>Hire Me Now!</a>
          </div>
          <div className='social-icons'>
          <a href='https://www.facebook.com/profile.php?id=100013637074416' target='blank'><i class='bx bxl-facebook'></i></a>
          <a href='https://www.instagram.com/karthikn75/' target='blank'><i class='bx bxl-instagram' ></i></a>
          <a href='https://twitter.com/M6029' target='blank'><i class='bx bxl-twitter' ></i></a>
          <a href='https://github.com/karthikn25' target='blank'><i class='bx bxl-github'></i></a>
          </div>
          </div>
          <div className='home-image'>
          <div className='img-box'>
            <img src={img1} alt=''/>
          </div>
          
          </div>
        </section>
  )
}
