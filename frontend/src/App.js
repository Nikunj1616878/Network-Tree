import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Home from './Home.js'
// import Header2 from './Header2.js';
import Notification from './Notification.js'
import About from './About.js';
import Contact from './Contact.js';
import Products from './Products.js'
import ScrollToTopButton from './ScrollToTopButton.js';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'

function App() {
  return (
    <div>
      <ScrollToTopButton />
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} /> 
           {/* <Route path='/about' element={<About/>} /> */}
           <Route path='/notifications' element={<Notification/>} />
          {/*<Route path='/contact' element={<Contact/>} />
          <Route path='/products' element={<Products/>} /> */}
        </Routes>
      </Router>
      {/* <Footer/> */}
    </div>
    
  );
}

export default App;
