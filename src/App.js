import './styles/App.css';
import Nav from './Nav'
import Home from './Home'
import About from './About'
import PortfolioHome from './PortfolioHome'
import Contact from './Contact'
import Footer from './Footer'
import { useState } from 'react'

function App() {

  const [page, setPage] = useState('Home')

  return (
   <>
    <div className='main'>
        <Nav setPage={setPage} />
        {page === 'Home' && <Home />}
        {page === 'Portfolio' && <PortfolioHome />}
        {page === 'About' && <About />}
        {page === 'Contact' && <Contact />}
        
    </div>
      <Footer className='footer' setPage={setPage}/>
   </>
  );
}

export default App;
