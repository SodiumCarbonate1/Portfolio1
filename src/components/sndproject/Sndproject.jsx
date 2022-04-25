import './sndproject.scss';
import Restaurant from "../../assets/Restaurant.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Sndproject(){

    return(
        <div className='Projects'>
            <div className='titlesum'>
                <h1 className='title'>Projects</h1>
                <h2 className='subtitle'>Restaurant Guide For McMaster Student </h2>
            </div>
            <div className='detail'>
                <img src={Restaurant} alt=""  width="100%" height="350px" className='rest'/>
                <a href="https://github.com/SodiumCarbonate1/Restaurant-Guide-for-McMaster-University/tree/main/app(1)" className='buttonlist'>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
                <div className='introduction'>
                    <div className='description'>
                        <div className='blockele'>
                            <h2>Description:</h2>
                                <ol>
                                    <li>1. Conducted food tour restaurant guide website by using React for McMaster University student to search for restaurants.</li>
                                    <li>2. Fetched restaurant-related information stored in JSON files from various sources using Axios. Provided route, estimated arrived time and destination functionalities using Bing map API. Utilized Bootstrap to style a responsive page. And Used React-Router to handle state management.</li>
                                    <li>3. Gathered improvement proposals by Organizing three rounds of usability test and Redesigned and implemented new features with more user-friendly UI interface.</li>
                                    <li>4. Coordinated group members with different academic backgrounds and skill levels to successfully deliver the project on time.</li>
                                </ol>
                        </div>
                    </div>
                    <div className="tech">
                        <div className='blockele'>
                            <h2>Technology Stacks:</h2>
                            <ol>
                                <li>React-Router</li>
                                <li>Bing map API</li>
                                <li>Bootstrap</li>
                                <li>Axios</li>
                            </ol>
                        </div>
                    </div>
                    <div className="Framework">
                        <div className='blockele'>
                            <h2>Framework:</h2>
                            <ol>
                                <li>React</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}