import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About'
import Skills from './Components/Skills/Skills';
import {BrowserRouter ,Route,Routes,useLocation}from 'react-router-dom'
import Project from './Components/Project/Project';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Contact from './Components/Contact/Contact';
import { useEffect, useState } from 'react';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000); // 2-second loading time
    return () => clearTimeout(timer); 
  }, []);
  return (
    <div className="App">
        {isLoading ? (
        <div className="loading">
          <div className="loader"></div>
        </div>
      ) : (
        <>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Banner/> }></Route>
        <Route path='/about' element={ <About/> }></Route>
        <Route path='/skills' element={ <Skills/> }></Route>
        <Route path='/project' element={ <Project/> }></Route>
        <Route path='/project/:projectid' element={ <ProjectDetails/> }></Route>
        <Route path='/contact' element={ <Contact/> }></Route>
        <Route path='*' element={ <ErrorPage/> }></Route>
      </Routes>
      <Footer />
 </>
      )}
    </div>
  );
}

export default App;
