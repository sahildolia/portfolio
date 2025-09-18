import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar'
import AboutPage from './pages/AboutPage/AboutPage'
import BannerPage from './pages/BannerPage/BannerPage'
import Modal from './components/ui/Modal/Modal';
import ResumePage from './pages/ResumePage/ResumePage';
import PortfolioPage from './pages/PortfolioPage/PortfolioPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {

  return (
    <>
    {/* <Navbar/>
    <BannerPage/> */}
     <div className="App">
       <Navbar/>
      <Routes>
        <Route path="/" element={<BannerPage />} />
        <Route 
          path="/about" 
          element={
            <Modal>
              <AboutPage />
            </Modal>
          } 
         /> 
        <Route 
          path="/resume" 
          element={
            <Modal>
              <ResumePage />
            </Modal>
          } 
         /> 
        <Route 
          path="/portfolio" 
          element={
            <Modal>
              <PortfolioPage />
            </Modal>
          } 
         /> 
        <Route 
          path="/contact" 
          element={
            <Modal>
              <ContactPage />
            </Modal>
          } 
         /> 
      </Routes>
    </div>
    </>
  )
}

export default App
