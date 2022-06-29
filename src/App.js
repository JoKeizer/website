import React, {useState, useEffect} from 'react';

//Nav
import Nav from './components/Nav'

//Pages
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail'
//Global Style
import GlobalStyle from './components/GlobalStyle';

//Router
import { Routes ,Route, useLocation, useSearchParams} from 'react-router-dom';

//Animation //when leave
import { AnimatePresence } from 'framer-motion';

function App() {

  const [currentKey, setCurrentKey] = useState("123");

  const location = useLocation();
  const test = useSearchParams();
  console.log(test, "test")


  React.useEffect(() => {
    console.log(location)
    let keyIndex = Math.random();
    setCurrentKey(keyIndex)
    location.key = keyIndex.toString();
  }, [location]);

  console.log(currentKey,"currentKey")
  console.log(location.key,"locationkey")
  console.log(location)
  
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/' exact element={<AboutUs/>} />
          <Route path='/work' exact element={<OurWork/>} />
          <Route path="/work/:id" element={<MovieDetail/>}/>
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
