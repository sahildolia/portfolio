import './AboutBanner.css'
import HeadingwithBar from '../../../ui/headingwithBar/HeadingwithBar'
import infoImg from '../../../../assets/img.jpg'
import Button from '../../../ui/button/Button'
import Services from '../Services/Services'
import { useState } from 'react'
import PopupModal from '../../../ui/PopupModal/PopupModal'
const AboutBanner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownloadCV = () => {
    // Logic to download CV would go here
    console.log('Downloading CV...');
    // For now, we'll just open the modal
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sahil-dolia-2b52261a9', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:sahildolia.456@gmail.com';
  };

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
          I am a Developer based in the India and I have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
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
              href="mailto:sahildolia.456@gmail.com"
              className="hover:underline email"
            >
              sahildolia.456@gmail.com
            </a>
          </p>
        </div>
      </div>

    </address>

<Button onClick={handleDownloadCV}>Request CV</Button>
 <PopupModal isOpen={isModalOpen} onClose={handleCloseModal}>
       <div className="connect-modal">
          <h2 className="modal-title">Let's Connect Professionally</h2>
          <p className="modal-description">
            I prefer to share my CV directly with interested recruiters and hiring managers to maintain privacy. 
            Let's connect and I'll be happy to share my qualifications.
          </p>
          
          <div className="connect-options">
            <button className="connect-option linkedin" onClick={handleLinkedInClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>Connect on LinkedIn</span>
            </button>
            
            <button className="connect-option email" onClick={handleEmailClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <span>Send me an Email</span>
            </button>
          </div>
          
          <div className="modal-footer">
            <p className="modal-note">
              I typically respond within 24 hours. Looking forward to connecting with you!
            </p>
          </div>
        </div>
      </PopupModal>

        </div>
      </div>
    </section>
<Services/>
</div>


    </div>
  )
}

export default AboutBanner