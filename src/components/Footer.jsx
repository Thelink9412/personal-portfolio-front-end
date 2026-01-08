import '../assets/styles/footer.css'
import { useIsMobile } from '../isMobile'

function Footer() {
    const isMobile = useIsMobile(500)

    return (<footer className="footer-section">
        <hr className="footer-divider" />
        <div className="footer-container">
            <small style={{
                fontFamily: 'sans-serif',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>© 2024 Luca Baudo.{isMobile ? <br /> : ''} All rights reserved.<br />
                <i>Built with React, Bootstrap & ❤️</i></small>
            <a
                href="https://github.com/Thelink9412/personal-portfolio-front-end"
                target="_blank"
                rel="noreferrer"
                className="source-code-link hoverable-link"
            >
                <span>{`</>`}</span> View Source Code
            </a>
        </div>
    </footer>)
}

export default Footer