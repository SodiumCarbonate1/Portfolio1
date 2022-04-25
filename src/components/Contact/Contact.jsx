import React from 'react';
import './contact.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter,faInstagram,faMedium,faLinkedin, } from '@fortawesome/free-brands-svg-icons';
 function Contact() {
   return (
     <div className='Contact' id="Contact">
       <div className='top'>
        <div className='introduction'>
          <div className='talk'>
            <h2>Let's Talk</h2>
            <p>Hey there, please feel free to contact me for more information about me or my projects! I will be more than happy to reply you as soon as possible!</p>
          </div>

          <div className='media'>
            <h3>Follow me</h3>
            <div className='icons'>
                <a href="https://github.com/SodiumCarbonate1" className='buttonlist'>
                          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
                <a href="https://www.instagram.com/sodiumcarbonate1/" className='buttonlist'>
                          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
                <a href="https://medium.com/@chenwayne1998/spotify-music-player-using-react-js-next-js-nextauth-js-ab591635cb32" className='buttonlist'>
                          <FontAwesomeIcon icon={faMedium}></FontAwesomeIcon>
                </a>
                <a href="https://www.linkedin.com/in/qingyuanchen/" className='buttonlist'>
                          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>

            </div>
          </div>
          
        </div>
        <div className='textbox'>
        <section id="contact" class="contact">
          <div class="wrapper">
            <h2>Contact</h2>
              <form action="" method="post">
                <div class="form-element">
                  <label for="name">Name</label>
                  <input type="text" name="name" id="name"/>
                </div>
                <div class="form-element">
                  <label for="email">Email</label>
                  <input type="email" name="email" id="email"/>
                </div>
                <div class="form-element">
                  <label for="message">Leave a message</label>
                  <textarea name="message" id="message" cols="30" rows="10"></textarea>
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </section>
        </div>
      </div>
       <div className='bottom'>
          <footer>
            <div class="wrapper">
              Copyright &copy; Wayne
            </div>
          </footer>
       </div>
     </div>



   )
 }
 
 export default Contact