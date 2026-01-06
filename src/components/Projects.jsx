import { Carousel } from 'react-bootstrap'
import DBProject from './projects/DBProject';
import UxUiProject from './projects/UxUiProject';
import GameProject from './projects/GameProject';

function Projects() {

    return (
        <div className='projects' id='projects'>
            <h2>Projects</h2>
            <div className='vertical-line'></div>
            <div className='custom-carousel-container'>
                <Carousel className='projects-carousel' interval={null}>
                    <Carousel.Item>
                        <h3>E-commerce Database</h3>
                        <DBProject />
                    </Carousel.Item>
                    <Carousel.Item>
                        <h3>UX/UI for app 'Ammuccamu!'</h3>
                        <UxUiProject />
                    </Carousel.Item>
                    <Carousel.Item>
                        <GameProject />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>)
}

export default Projects