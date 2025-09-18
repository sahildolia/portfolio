import Contactform from '../../ui/Contactform/Contactform'
import HeadingwithBar from '../../ui/headingwithBar/HeadingwithBar'
import './Contact.css'
const Contact = () => {
  return (
    <div className="main-container">
              <HeadingwithBar
        subtitle="Feel free to contact me anytimes"
        title="Get in Touch"
        center={true}
      />

<Contactform/>

    </div>
  )
}

export default Contact