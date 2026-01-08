import { Carousel } from 'react-bootstrap'
import Zoom from 'react-medium-image-zoom';
import DBScheme from '../../assets/images/db-scheme.png'

function DBProject() {
    const handleTouchInside = (e) => {
        e.stopPropagation(); 
    };

    return (
        <div className='database-project'>
            <section className='project-description col-md-6 text-white'>
                <div className='internal-carousel-container'>
                    <Carousel onTouchStart={handleTouchInside} className='internal-carousel' controls={false} indicators={true} interval={null}>
                        <Carousel.Item>
                            <h4>Overview</h4>
                            <p>
                                This project features a robust relational database designed to manage a multi-vendor E-commerce ecosystem.
                                Developed using MySQL, the architecture handles complex data relationships between users,
                                multiple web domains (Sito), product availability, and automated payment processing.
                                The primary focus of this project was to ensure absolute data integrity and business logic automation
                                directly at the database level.
                            </p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h4>Key Technical Features</h4>
                            <p>
                                Complex Relational Mapping: Managed a sophisticated schema including
                                Account, Cart (Carrello), Orders, and Products, ensuring seamless connectivity between
                                user profiles and their transactional history.
                            </p>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h4>Deliverables</h4>
                            <p>
                                The included assets provide the full SQL dump, including table structures,
                                relationship constraints (PK/FK), and specialized triggers that enforce real-world e-commerce rules
                                (e.g., maximum unique products per cart, payment success verification).
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
                        className="cursor-zoom-in"
                        style={{ border: '2px solid var(--highlight-elements-color)', maxHeight: '300px', marginLeft: '30px' }}
                    />
                </Zoom>
                <a href='/downloads/db-zip.zip' download='E-commerce Database.zip' className='download-zip-link hoverable-link'>Download zip file</a>
            </div>

        </div>)
}

export default DBProject