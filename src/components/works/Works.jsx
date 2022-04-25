import collier from '../../assets/collier.png';
import infrar3cd from '../../assets/INFRAR3D.png';
import React from 'react'
import './works.scss';

export default function Works() {
  return (
    <div className='Works' id="Works">
      <h2 className='title'>Works</h2>
      <div className='comb'>
        <div className="left">
          <div className="imgContainer">
            <img className="companypic" src={collier} alt="collier" width="200px" height="100px"/>
            <p className="company">Collier International Group</p>
          </div>
          <div className="jobs">
            <p className="jobTitle">Market Coordinator Intern</p>
            <p className="jobTime">2017 Apr. - 2017 Aug.</p>
            <div className="jobDesc">
              <p>Conducted property information searches from government resources and utilized database resources to generate report to predict the future trends of the real estate market under the supervision of the manager.</p><br />
              <p>Imported and organized the latest property information to the firm database based on the requirements from analytic teams.</p><br />
              <p>Delivered research and validated data while building and maintaining relationships with both stakeholders and potential buyers.</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="imgContainer">
              <img  className="companypic" src={infrar3cd} alt="" width="200px" height="100px"/>
              <p className="company">Infara3d Inc.</p>
            </div>

            <div className="jobs">
              <p className="jobTitle">Frontend Developer</p>
              <p className="jobTime">2022 Jan. - Present</p>
              <div className="jobDesc">
              <p>Facilitated $500K learning website development project by accomplishing web-based user interfaces, improving usability and translating UI/UX design mock-ups and prototypes into website applications using React.</p><br />
              <p>Collaborated closely with designers and the development team to collect clients' requirements, describe website features, negotiate program feasibility and giving implement recommendation to the leadership.</p><br />
              <p>Increased 30% positive feedbacks by gathering clients survey result from 2 rounds usability test. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
