import React from 'react'
import "./assets/css/About.css"
import clock from "./assets/logo/pngegg.png"
import img1 from "./assets/logo/15.jpg"
import img2 from "./assets/logo/13.jpg"
import img3 from "./assets/logo/14.jpg"

import { useEffect } from 'react'
function About(props) {
  

     
  return (
    <>
        <div className="about" id='2'>
            
            <div className={`about_container ${props.mode ? '' : 'l'}`} >
            <div className={` about_head ${props.mode ? '' : 'light'}`} >
                <h1>Unleash your potential!</h1>
                <h2>Boost productivity</h2>
            </div>
                <div className="about_content">
                <div className="card">
            <div className="card__container">
                <article className="card__article">
                    <div className="card__data">
                        <img src={img1} alt="card img" className="card__img"/>
    
                        <h1 className="card__title">Boost Your Productivity</h1>
                        <p className="card__description"> Track your web time and take control of your online activities with our powerful Productivity Tracker Chrome extension. Gain valuable insights, improve time management.</p>
                    </div>
    
   
                </article>
    
                <article className="card__article">
                    <div className="card__data">
                        <img src={img2} alt="card img" className="card__img"/>
    
                        <h1 className="card__title">Privacy-Focused and Secure!</h1>
                        <p className="card__description">Our recently launched Productivity Tracker Chrome extension prioritizes your privacy. Rest assured, our privacy-focused productivity tracker never collects any user data, ensuring complete anonymity.</p>
                    </div>
    

                </article>
    
                <article className="card__article">
                    <div className="card__data">
                        <img src={img3} alt="card img" className="card__img"/>
    
                        <h1 className="card__title"> Constantly Evolving for Enhanced Productivity!</h1>
                        <p className="card__description">Stay ahead of the game with our Productivity Tracker Chrome extension's continuous development and upcoming features.</p>
                    </div>
    
     
                </article>
            </div>
        </div>
                    
                   
                </div>
            </div>
        </div>
    </>
  )
}

export default About