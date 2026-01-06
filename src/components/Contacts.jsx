import emailIcon from '../assets/images/email-icon.png'
import linkedinIcon from '../assets/images/linkedin-icon.png'
import githubIcon from '../assets/images/github-icon.png'
import ContactForm from './ContactForm';
import '../assets/styles/contacts.css'

function Contacts() {

    return (<section className='contacts' id='contacts'>
        <h2>Get in touch</h2>
        <p>
            I'm currently looking for new opportunities.
            Whether you have a question or just want to say hi,
            I'll try my best to get back to you!
        </p>
        <div className='contact-me-container'>
            <section className='contact-me-direct-links'>
                <span><img src={emailIcon} alt="Email Icon" /><a href="mailto:lucabaudo9412@gmail.com" className='my-email-link hoverable-link'>lucabaudo9412@gmail.com</a></span>
                <span><img src={linkedinIcon} alt="LinkedIn Icon" style={{ width: '50px' }} /><a href="https://www.linkedin.com/in/luca-baudo-2728a7358/" className='my-linkedin-link hoverable-link' target='blank'>Luca Baudo</a></span>
                <span><img src={githubIcon} alt="Github Icon" style={{ width: '50px' }} /><a href="https://github.com/Thelink9412" className='github-link hoverable-link' target='blank'>Github</a></span>
            </section>
            <ContactForm />
        </div>
    </section>)
}

export default Contacts