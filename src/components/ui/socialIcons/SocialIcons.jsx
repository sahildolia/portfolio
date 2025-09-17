import './SocialIcons.css'
import linkedIn from '../../../assets/icons8-linkedin-50.svg'
import instaIcon from '../../../assets/instagram.png'
import githubIcon from '../../../assets/icons8-github.svg'
const SocialIcons = () => {
  return (
    <div className='social_icons absolute bottom-0 right-0 container-fluid'>

<img 
  src={linkedIn} 
  alt="LinkedIn icon" 
  className="white-svg"
/>
<img 
  src={instaIcon} 
  alt="Instagram icon" 
  className="filter brightness-0 invert"
/>

<img src={githubIcon} alt="linkedIn icon" className="white-svg" />
    </div>
  )
}

export default SocialIcons