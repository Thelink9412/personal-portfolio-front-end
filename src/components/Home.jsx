import myPhoto from '../assets/images/my-photo.png'
import '../assets/styles/presentation.css'
function Home() {

    return (<div className='home' id='home'>
        <div className='presentation'>
            <div className='personal-info'>
                <span className='hello-span'>Hello <b className='point highlight'>.</b></span>
                <span className='personal-name'><div className='line highlight'></div>I'm Luca</span>
                <span className='personal-role'>Front-end Developer</span>
                <section className='info-buttons'>
                    <a href='#contacts'><button className='contact-me-btn'>Contact me</button></a>
                    <a href="downloads/resume.pdf" download='Luca Baudo Resume.pdf'><button className='resume-btn'>My resume</button></a>
                </section>
            </div>
            <img src={myPhoto} alt="Personal Picture" />
        </div>
        <section className='skills-list'>
            <ul>
                <li>HTML5</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Git</li>
                <li>Github</li>
            </ul>
        </section>
    </div>)
}

export default Home