import { useState, useEffect } from "react"
import mobileMenuIcon from '../assets/images/mobile-menu-icon.png'

function MobileMenu() {
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (isActive) {
            document.documentElement.classList.add('no-scroll');
            document.body.classList.add('no-scroll');
        } else {
            document.documentElement.classList.remove('no-scroll');
            document.body.classList.remove('no-scroll');
        }
    }, [isActive]);

    return (
        <>
            <div className={`blur ${isActive ? 'is-active' : ''}`} onClick={() => setIsActive(prev => !prev)}></div>
            <section className={`mobile-menu ${isActive ? 'active' : ''}`}>
                <img src={mobileMenuIcon} alt="Mobile Menu Icon" onClick={() => setIsActive(prev => !prev)} />
                <ul className='links'>
                    <li><a href='#home' onClick={() => setIsActive(prev => !prev)}>Home</a></li>
                    <li><a href='#about' onClick={() => setIsActive(prev => !prev)}>About</a></li>
                    <li><a href='#projects' onClick={() => setIsActive(prev => !prev)}>Projects</a></li>
                    <li><a href='#contacts' onClick={() => setIsActive(prev => !prev)}>Contacts</a></li>
                </ul>
            </section>
        </>)
}

export default MobileMenu