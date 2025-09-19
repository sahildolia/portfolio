import React from 'react'
import HeadingwithBar from '../../../ui/headingwithBar/HeadingwithBar'
import MyServiceCard from '../../../ui/myServiceCard/MyServiceCard'

const Services = () => {
const services = [
    {
      title: "Web Design",
      description: "Creating visually stunning and user-friendly interfaces that captivate your audience and enhance user experience.",
      icon: (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    },
    {
      title: "Mockup Design",
      description: "Designing detailed mockups and prototypes that bring your ideas to life before development begins.",
      icon: (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
          <circle cx="6" cy="6" r="3"></circle>
          <circle cx="6" cy="18" r="3"></circle>
          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
        </svg>
      )
    },
    {
      title: "Wordpress Development",
      description: "Custom WordPress solutions with tailored themes and plugins for easy content management.",
      icon: (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      )
    },
    {
      title: "Web Development",
      description: "Building robust, scalable websites and applications with clean code and modern technologies.",
      icon: (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
        </svg>
      )
    },
    {
      title: "Fully Responsive",
      description: "Ensuring your website looks and works perfectly across all devices, from desktop to mobile.",
      icon: (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
        </svg>
      )
    },
    {
      title: "Digital Marketing",
      description: "Strategic online marketing campaigns to boost your visibility and drive targeted traffic.",
      icon: (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      )
    }
  ]


  return (
    <section className="text-gray-400 body-font">
      <div className="container mx-auto px-5 py-24">
        <HeadingwithBar
  subtitle="Services i offer to my clients" 
  title="My Services" 
  showBar={false}
  center={false}

/>
        
        <div className="flex flex-wrap -m-4">
          {services.map((service, index) => (
            <MyServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services