//Nav
import Nav from './components/Nav'

//Pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';

//Global Style
import GlobalStyle from './components/GlobalStyle';

//Router
import { Routes ,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Routes>
        <Route path='/' exact element={<AboutUs/>} />
        <Route path='/our-work' element={<OurWork/>} />
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
    </div>
  );
}

export default App;
