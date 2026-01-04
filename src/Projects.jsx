import { Carousel } from 'react-bootstrap'
import DBScheme from './assets/images/db-scheme.png'
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

                                <div className='inner-carousel-container'>
                                    <Carousel className='inner-carousel' controls={false} indicators={true}>
                                        <Carousel.Item>
                                            
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </section>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>)
}

export default Projects