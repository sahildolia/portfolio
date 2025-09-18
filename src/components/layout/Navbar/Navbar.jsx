import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from '../../../assets/logo.svg'
function Navbar() {
  return (
    <>
      <header className=" body-font">
      <div className="container-fluid mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src={logo} className="w-100"/>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/about" className="mr-5 hover:text-white">About</Link>
          <Link to="/resume" className="mr-5 hover:text-white">Resume</Link>
          <Link to="/" className="mr-5 hover:text-white">Portfolio</Link>
          <Link to="/" className="mr-5 hover:text-white">Contact</Link>
        </nav>
 
      </div>
    </header>
    </>
    
  )
}

export default Navbar