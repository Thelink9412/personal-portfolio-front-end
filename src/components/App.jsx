import TopNavBar from './TopNavBar';
import DesktopPresentation from './DesktopPresentation';

import AboutMe from './AboutMe';
import Projects from './Projects';
import Contacts from './Contacts';
import Footer from './Footer';
import { useIsMobile } from '../isMobile';
import MobilePresentation from './MobilePresentation';

function App() {
  const isMobile = useIsMobile(769);

  return (
    <div className='app'>
      <TopNavBar />
      {isMobile ? <MobilePresentation /> : <DesktopPresentation />}
      <AboutMe />
      <hr className='horizontal-divider' />
      <Projects />
      <hr className='horizontal-divider' />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App
