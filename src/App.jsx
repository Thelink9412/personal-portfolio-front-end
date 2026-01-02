import { BrowserRouter, Link } from 'react-router-dom'
import TopNavBar from './TopNavBar';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <TopNavBar />
        <Home />
      </div>
    </BrowserRouter>
  );
}

export default App
