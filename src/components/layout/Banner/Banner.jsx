import SocialIcons from '../../ui/socialIcons/SocialIcons'
import Typewriter from '../../ui/typewriter/Typewriter'
import HeadingwithBar from '../../ui/headingwithBar/HeadingwithBar'
import './Banner.css'
const Banner = () => {
  return (
    <>

<div className="container h-full mx-auto" style={{height: "90vh"}}>
<SocialIcons/>
  <div className="flex h-full items-center justify-center">
    <div className="w-full lg:w-2/3 home-content text-center">
      <h1 className="text-7xl font-bold home-name heading" >
        Sahil Dolia
      </h1>
<Typewriter/>
    </div>
  </div>
</div>
    </>
  )
}

export default Banner