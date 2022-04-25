import React from 'react';
import './intro.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { init } from 'ityped';
import { useEffect,useRef } from 'react';

export default function Intro() {


  const textRef = useRef();
  useEffect (()=>{
    init(textRef.current,{
      showCursor: true,
      strings:["Frontend Developer","Cat Lover","Gamer!"],
    })
    
  },[])
  return (
    <div className='intro' id="Intro">
      <div className='Text'>
        <h2>Qingyuan Chen</h2>
        <span id='jobtitle' ref={textRef}></span>
        <p className='introduction'>A Front-end Developer based in Toronto who defines and facilitates user-centered design decisions through storytelling and technology</p>
        <div className='buttonlist'>
          <a href="https://github.com/SodiumCarbonate1">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/qingyuanchen/">
            <FontAwesomeIcon icon={faLinkedin} ></FontAwesomeIcon>
          </a>
          <a href="https://www.instagram.com/sodiumcarbonate1/">
             <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
        </div>
      </div>
    </div>
  )
}
