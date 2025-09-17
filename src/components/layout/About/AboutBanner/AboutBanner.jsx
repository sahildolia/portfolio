import './AboutBanner.css'
import HeadingwithBar from '../../../ui/headingwithBar/HeadingwithBar'
import infoImg from '../../../../assets/info-img.jpg'
import Button from '../../../ui/button/Button'
import Services from '../Services/Services'
const AboutBanner = () => {
  return (
    <div className='main-container'>
      <HeadingwithBar
  subtitle="Get to know me" 
  title="About Me" 
  center={true}
/>

{/*  */}
<div className='section-container'>

    <section className="text-gray-400 body-font mx-auto">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 coverImg">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={infoImg}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-16 md:pl-16 flex flex-col md:items-start md:text-left items-center">
        <h1> <span> Who am i?</span></h1>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white content-title">
           I'm Sahil Dolia, a visual UX/UI Designer and Web Developer
          </h1>
          <p className="mb-8 leading-relaxed sec-p">
          I am a freelancer based in the India and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
          </p>

 <address className="content-info">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="single-info flex">
          <span className="block font-semibold text-gray-300">Name:</span>
          <p className="text-gray-400">Sahil Dolia</p>
        </div>
        <div className="single-info flex">
          <span className="block font-semibold text-gray-300">Email:</span>
          <p>
            <a
              href="mailto:emma@example.com"
              className="hover:underline email"
            >
              sahildolia.456@gmail.com
            </a>
          </p>
        </div>
      </div>

    </address>

<Button>Download CV</Button>


        </div>
      </div>
    </section>
<Services/>
</div>


    </div>
  )
}

export default AboutBanner