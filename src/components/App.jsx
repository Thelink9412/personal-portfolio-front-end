import TopNavBar from './TopNavBar';
import Home from './Home';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contacts from './Contacts';
import Footer from './Footer';


function App() {
  return (
    <div className='app'>
      <TopNavBar />
      <Home />
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
