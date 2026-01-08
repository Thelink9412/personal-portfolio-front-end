import '../assets/styles/topbar.css'
import MobileMenu from './MobileMenu';
import { useIsMobile } from '../isMobile';

function TopNavBar() {
    const isMobile = useIsMobile(500);

    return (<nav className='top-navbar'>
        <h2>Luca Baudo</h2>
        {isMobile ?
            <MobileMenu />
            :
            (<ul className='links'>
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#contacts'>Contacts</a></li>
            </ul>)}

    </nav>)
}

export default TopNavBar