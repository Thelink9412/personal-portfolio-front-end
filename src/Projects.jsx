import { Carousel } from 'react-bootstrap'
import DBScheme from './assets/images/db-scheme.png'
function Projects() {

    return (
        <div className='projects' id='projects'>
            <h2>Projects</h2>
            <div className='vertical-line'></div>
            <Carousel className='projects-carousel'>
                <Carousel.Item>
                    <h3>E-commerce Database</h3>
                    <div className='database-project'>
                        <section className='project-description col-md-6 text-white'>
                            <p>
                                <Carousel className='internal-carousel'>
                                    <Carousel.Item>
                                        <h4>Overview</h4>

                                        This project features a robust relational database designed to manage a multi-vendor E-commerce ecosystem. Developed using MariaDB/MySQL, the architecture handles complex data relationships between users, multiple web domains (Sito), product availability, and automated payment processing. The primary focus of this project was to ensure absolute data integrity and business logic automation directly at the database level.

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <h4>Key Technical Features</h4>

                                        Complex Relational Mapping: Managed a sophisticated schema including Account, Cart (Carrello), Orders, and Products, ensuring seamless connectivity between user profiles and their transactional history.

                                    </Carousel.Item>
                                    <Carousel.Item>

                                        <h4>Advanced Logic Automation (Triggers):</h4>

                                        Financial Integrity: Implemented triggers to automatically update account balances and total cart prices upon insertion or deletion of items.

                                        Stock & Availability Control: Created automated routines to verify product availability before allowing items to be added to a cart.

                                        Multi-Site Validation: Developed constraints to ensure users can only purchase products from the specific web domain associated with their account.

                                        Security & Data Consistency: Defined strict FOREIGN KEY constraints with CASCADE updates/deletes to maintain referential integrity across all 10+ tables.

                                        Normalization: The schema is optimized for performance, following normalization principles to eliminate data redundancy while supporting complex queries.
                                    </Carousel.Item>
                                    <Carousel.Item>

                                        <h4>Deliverables</h4>

                                        The included assets provide the full SQL dump, including table structures, relationship constraints (PK/FK), and specialized triggers that enforce real-world e-commerce rules (e.g., maximum unique products per cart, payment success verification)."

                                    </Carousel.Item>
                                </Carousel>

                            </p>

                        </section>
                        <div className="col-md-6 text-center">
                            <img
                                src={DBScheme}
                                alt="Database Schema"
                                className="img-fluid rounded shadow"
                                style={{ border: '2px solid var(--highlight-elements-color)', maxHeight: '300px' }}
                            />
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>)
}

export default Projects