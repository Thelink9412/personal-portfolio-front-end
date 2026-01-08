import { useState } from "react"
import mobileMenuIcon from '../assets/images/mobile-menu-icon.png'

function MobileMenu() {
    const [isActive, setIsActive] = useState(false)

    return (<section className={`mobile-menu ${isActive ? 'active' : ''}`}>
        <img src={mobileMenuIcon} alt="Mobile Menu Icon" onClick={() => setIsActive(prev => !prev)}/>
        <ul className='links'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contacts'>Contacts</a></li>
        </ul>
    </section>)
}

export default MobileMenu