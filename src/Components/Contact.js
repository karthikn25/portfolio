import React,{useRef} from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m4zwyho', 'template_l6615uh', form.current, '_ulEAJwyCohSqgl0t')
      .then((result) => {
          console.log(result.text); 
          console.log("Message send")
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <section className='contact'>
    
    <div className='container'>
    <div className='row'>
    <div className='section-title padd-15' style={{textAlign:"center"}}>
    <h2>Contact Me</h2>
    <span style={{color:'white'}}>If You Have Any Question Please Ask!</span>
    </div>
    </div>
    <div className='form-box'>
    <form ref={form} onSubmit={sendEmail}>
    <label style={{color:'#12f7ff',fontSize:'large'}}><b>Name</b></label>
    <input type="text" name="user_name" />
    <label style={{color:'#12f7ff',fontSize:'large'}}><b>Email</b></label>
    <input type="email" name="user_email" />
    <label style={{color:'#12f7ff',fontSize:'large'}}><b>Message</b></label>
    <textarea name="message" />
    <div className='btn-box'>
    <input type="submit" value="Send" className='btn' style={{color:'#250821',fontSize:'large,'}}/></div>
  </form>
  </div>
    
     </div>
    </section>
  )
}
