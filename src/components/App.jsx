import TopNavBar from './TopNavBar';
import DesktopPresentation from './DesktopPresentation';

import AboutMe from './AboutMe';
import Projects from './Projects';
import Contacts from './Contacts';
import Footer from './Footer';
import { useIsMobile } from '../isMobile';
import MobilePresentation from './MobilePresentation';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const isMobile = useIsMobile(500);

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
      <Analytics />
    </div>
  );
}

export default App
