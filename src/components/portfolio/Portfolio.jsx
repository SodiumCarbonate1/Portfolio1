import React from 'react';
import './portfolio.scss';
export default function Portfolio() {
  return (
    <div className='Portfolio' id="Portfolio">
      <h2 className='title'>Skills</h2>
      <div className='introduction'>
        <div className='frontend'>
          <div className='introbox'>
            <section>
              <h3>Frontend</h3>
              My HTML/CSS, Javascript, and the usage of my modern libraries and frameworks have reached a fluent level. Through years of study, I have gained the ability to convert wireframes to projects. I have also been involved in multiples React and Vue projects back in the university, which you can take a look at in project section.
            </section>
          </div>
          <div className='frontdetail'>
            <div className='test'>
                <p className='skills'>CSS</p>
                <div className='progress'>
                  <div className='progress-value'></div>
                  <p className='percent'>88%</p>
                </div>
            </div>
            <div className='test'>
            <p className='skills'>Js</p>
            <div className='progress'>
              <div className='progress-value1'></div>
              <p>90%</p>
            </div>
            </div>
            <div className='test'>
            <p className='skills'>HTML</p>
            <div className='progress'>
              <div className='progress-value2'></div>
              <p>92%</p>
            </div>
            </div>
            <div className='test'>
            <p className='skills'>React</p>
            <div className='progress'>
              <div className='progress-value3'></div>
              <p>85%</p>
            </div>
            </div>
            <div className='test'>
              <p className='skills'>Angular</p>
              <div className='progress'>
                <div className='progress-value6'></div>
                <p>70%</p>
              </div>
            </div>
            <div className='test'>
              <p className='skills'>Next</p>
              <div className='progress'>
                <div className='progress-value7'></div>
                <p>81%</p>
              </div>
            </div>
            <div className='test'>
              <p className='skills'>Node</p>
              <div className='progress'>
                <div className='progress-value4'></div>
                <p>80%</p>
              </div>
            </div>
            <div className='test'>
              <p className='skills'>Figma</p>
              <div className='progress'>
                <div className='progress-value5'></div>
                <p>60%</p>
              </div>

            </div>
          </div>

        </div>
        <div className='backend'>
          <div className='introbox'>
            <section>
              <h3>Backend</h3>
              I was a former McMaster student majoring in backend development. I’m familiar with modern backend languages such as Python, Java, C++, MySQL, and Ruby.  I have taken many related backend courses such as Data Structures and Algorithm, Databases, Software Development to enhance my backend knowedge further. The backend projects can also be viewed under the project section!
            </section>
          </div>
          <div className='backenddetail'>
          <div className='test'>
            <p className='skills'>Python</p>
            <div className='progress'>
              <div className='progress-value8'></div>
                <p>75%</p>
              </div>
          </div>
          <div className='test'>
              <p className='skills'>Java</p>
              <div className='progress'>
                <div className='progress-value9'></div>
                <p>83%</p>
              </div>
          </div>
          <div className='test'>
              <p className='skills'>MySQL</p>
              <div className='progress'>
                <div className='progress-value13'></div>
                <p>96%</p>
              </div>
          </div>
          <div className='test'>
              <p className='skills'>MongoDB</p>
              <div className='progress'>
                <div className='progress-value14'></div>
                <p>71%</p>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
