import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar/Navbar'
import AboutPage from './pages/AboutPage/AboutPage'
import BannerPage from './pages/BannerPage/BannerPage'
import Modal from './components/ui/Modal/Modal';

function App() {

  return (
    <>
    {/* <Navbar/>
    <BannerPage/> */}
     <div className="App">
       <Navbar/>
      <Routes>
        <Route path="/" element={<BannerPage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route 
          path="/about" 
          element={
            <Modal>
              <AboutPage />
            </Modal>
          } 
         /> 
        {/* Add more modal routes as needed */}
      </Routes>
    </div>
    </>
  )
}

export default App
