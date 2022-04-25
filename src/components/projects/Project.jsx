import './project.scss';
import spotifypic from "../../assets/image16.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Projects(){

    return(
        <div className='Projects'>
            <div className='titlesum'>
                <h1 className='title'>Projects</h1>
                <h2 className='subtitle'>Spotify API Music Player</h2>
            </div>
            <div className='detail'>
                <img src={spotifypic} alt=""  width="100%" height="350px" className='spotifypic'/>
                <a href="https://github.com/SodiumCarbonate1/Music-Player-with-Spotify-API" className='b1'>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
                <div className='introduction'>
                    <div className='description'>
                        <div className='blockele'>
                            <h2>Description:</h2>
                                <ol>
                                    <li>1. Created a Spotify API-based music player using frameworks React.js and Next.js.</li>
                                    <li>2. Interviewed Spotify users to gather valuable suggestions on Spotify and applied the concepts to refine wireframes.</li>
                                    <li>3. Fetched playlists, song information and provided controls to the music with Spotify API. Used NextAuth.js combined with middleware to perform authentication for users when logging in.</li>
                                    <li>4. Utilized Tailwind CSS to create a responsive layout and applied design principles to improve user experience.</li>
                                </ol>
                        </div>
                    </div>
                    <div className="tech">
                        <div className='blockele'>
                            <h2>Technology Stacks:</h2>
                            <ol>
                                <li>Spotify API</li>
                                <li>Next.js</li>
                                <li>NextAuth.js</li>
                                <li>Tailwind.css</li>
                                <li>Middleware</li>
                                <li>Recoil</li>
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