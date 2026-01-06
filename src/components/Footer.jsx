import '../assets/styles/footer.css'
function Footer() {

    return (<footer className="footer-section">
        <hr className="footer-divider" />
        <div className="footer-container">
            <small style={{
                fontFamily: 'sans-serif',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>© 2024 Luca Baudo. All rights reserved.<br />
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