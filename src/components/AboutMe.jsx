import ux_ui_icon from '../assets/images/ux-ui-icon.png'
import spaIcon from '../assets/images/spa-icon.png'
import frontendIcon from '../assets/images/frontend-icon.png'

function AboutMe() {

    return (<div className='about' id='about'>
        <div className='services'>
            <div className='timeline-container'>
                <div className='timeline-segment'>
                    <div className='vertical-line'></div>
                    <div className='dot highlight'></div>
                </div>
                <div className='timeline-segment'>
                    <div className='vertical-line'></div>
                    <div className='dot highlight'></div>
                </div>
                <div className='timeline-segment'>
                    <div className='vertical-line'></div>
                </div>
            </div>
            <section className='services-description'>
                <span><img src={ux_ui_icon} alt="UX/UI Icon" />UI/UX Implementation</span>
                <span><img src={spaIcon} alt="SPA Icon" />Web App & SPA Development</span>
                <span><img src={frontendIcon} alt="Frontend Icon" />Frontend Optimization & Deployment</span>
            </section>
        </div>
        <div className='about-me-section'>
            <h2>About me</h2>
            <p>As a recent Computer Science graduate, I am an aspiring Front-end Developer
                driven by a passion for building seamless, high-performance user experiences.
                My academic background has provided me with a strong foundation in software engineering
                and problem-solving, which I now aim to apply to modern web technologies.
                I am eager to kick-start my professional journey and contribute my technical skills
                and dedication to an innovative, forward-thinking team.</p>
        </div>
    </div>)
}

export default AboutMe