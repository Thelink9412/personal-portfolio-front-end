import { Carousel } from 'react-bootstrap'
import DBScheme from './assets/images/db-scheme.png'
import gameLogo from './assets/images/crystal-of-fate-logo.png'
import Zoom from 'react-medium-image-zoom';

function Projects() {

    return (
        <div className='projects' id='projects'>
            <h2>Projects</h2>
            <div className='vertical-line'></div>
            <div className='custom-carousel-container'>

                <Carousel className='projects-carousel'>
                    <Carousel.Item>
                        <h3>E-commerce Database</h3>
                        <div className='database-project'>
                            <section className='project-description col-md-6 text-white'>
                                <div className='internal-carousel-container'>
                                    <Carousel className='internal-carousel' controls={false} indicators={true}>
                                        <Carousel.Item>
                                            <h4>Overview</h4>
                                            <p>
                                                This project features a robust relational database designed to manage a multi-vendor E-commerce ecosystem. Developed using MariaDB/MySQL, the architecture handles complex data relationships between users, multiple web domains (Sito), product availability, and automated payment processing. The primary focus of this project was to ensure absolute data integrity and business logic automation directly at the database level.
                                            </p>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <h4>Key Technical Features</h4>
                                            <p>
                                                Complex Relational Mapping: Managed a sophisticated schema including Account, Cart (Carrello), Orders, and Products, ensuring seamless connectivity between user profiles and their transactional history.
                                            </p>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <h4>Deliverables</h4>
                                            <p>
                                                The included assets provide the full SQL dump, including table structures, relationship constraints (PK/FK), and specialized triggers that enforce real-world e-commerce rules (e.g., maximum unique products per cart, payment success verification)."
                                            </p>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </section>
                            <div className="img-container" onClick={(e) => e.stopPropagation()}>
                                <Zoom>
                                    <img
                                        src={DBScheme}
                                        alt="Database Schema"
                                        className="img-fluid rounded shadow cursor-zoom-in"
                                        style={{ border: '2px solid var(--highlight-elements-color)', maxHeight: '300px', marginLeft: '30px' }}
                                    />
                                </Zoom>
                                <a href='./assets/db-zip.zip' download='E-commerce Database.zip' className='download-zip-link'>Download zip file</a>
                            </div>

                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3>UX/UI for app 'Ammuccamu!'</h3>
                        <div className='ux-ui-project'>
                            <section className='project-description col-md-6 text-white'>
                                <h4>Overview</h4>
                                <p>
                                    Ammuccamu! is a food delivery application specifically designed to operate within the city of Catania. The platform focuses on local culinary traditions, allowing users to order territorial specialties such as typical sweets, fresh fish from the "Pescheria," and Catania's signature horse meat. To meet the needs of all parties involved, the app features three distinct navigation flows: one for customers, one for riders, and one for restaurateurs.
                                </p>
                            </section>
                            <div className='vertical-line'></div>
                            <section className='project-description col-md-6 text-white'>
                                <h4>Structure</h4>
                                <p>
                                    The structural phase was essential for defining the application's information architecture, distinguishing three primary flows for users, riders, and restaurant owners. Each flow was designed with unique sections and functionalities to ensure an optimized experience for every type of stakeholder involved.
                                </p>
                                <a href='https://www.figma.com/design/tqIX7PnnlDZMJ9WcvqOvHC/Wireframe-Ammuccamu-?t=TegjWShyEd2Fl1Vr-1' target='blank' className='figma-link'>Wireframes and Wireflow</a>
                            </section>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='game-project'>
                            <img src={gameLogo} alt="Game Logo" style={{width: '100%', borderRadius: '15px'}}/>
                            <h4>Overview</h4>
                            <p>
                                Crystal of Fate is a room-based Tower Defense focused on strategic positioning and resource management. Players must safeguard a central crystal by deploying defensive units across multiple rooms to intercept waves of randomly generated enemies. The game features a structured progression system across 4 distinct levels, each consisting of 4 tactical rounds, challenging players to adapt their strategy to unpredictable threats. Developed using <b>Unity Engine</b> and <b>C#</b>
                            </p>
                            <a href="https://thelink9412.itch.io/crystal-of-fate" target='blank' className='game-link'>Go to itch.io page</a>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>)
}

export default Projects