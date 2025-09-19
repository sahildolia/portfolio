import './SocialIcons.css'
import linkedIn from '../../../assets/icons8-linkedin-50.svg'
import instaIcon from '../../../assets/instagram.png'
import githubIcon from '../../../assets/icons8-github.svg'

const SocialIcons = () => {
  return (
    <div className='social_icons absolute bottom-0 right-0 container-fluid'>
      <a 
        href="https://www.linkedin.com/in/sahil-dolia-2b52261a9/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <img 
          src={linkedIn} 
          alt="LinkedIn icon" 
          className="white-svg"
        />
      </a>

      {/* Instagram */}
      <a 
        href="https://www.instagram.com/_sahilium/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <img 
          src={instaIcon} 
          alt="Instagram icon" 
          className="filter brightness-0 invert"
        />
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/sahildolia" 
        target="_blank" 
        rel="noopener noreferrer"
        className="social-link"
      >
        <img 
          src={githubIcon} 
          alt="GitHub icon" 
          className="white-svg"
        />
      </a>
    </div>
  )
}

export default SocialIcons