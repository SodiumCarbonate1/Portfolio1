import React from 'react';
import propic from '../../assets/wayne.jpg'
import './testimonials.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons';
export default function Testimonials() {
  return (
    <div className='Testimonials' id="Testimonials">
        <div className='introduction'>
            <div className='detail'>
              <p className='about'>About me</p>
              <p className='detailinfo'>My name is Qingyuan Chen, A diligent Front-end Developer based in Toronto,Ontario who has a deep understanding in technology and marketing. I graduated from McMaster University Majoring in Computer Science and I spend another one year studying frontend development in Georgebrown College. In terms of my speacialities, I’m gained the experience from my college and the work place in modern framework such as React, Angular, Vue and JQuery. I also have solid understanding about Next.js, Nextauth.js, middleware and all the other interesting technology stacks that you can find more in my resume!</p>
              <a href="https://1drv.ms/b/s!AjESCFg17eRmgcASeTcgL4TVAP69Ww" className='buttonlist'>
                  <FontAwesomeIcon icon={faCloudArrowDown}></FontAwesomeIcon>
              </a>
            </div>
        </div>
        <div className='profilepic'>
          <img className="wayne" src={propic} alt="wayne pic" width="800px" height="700px"/>
        </div>
    </div>
  )
}
