// src/components/ui/myServiceCard/MyServiceCard.jsx
import './MyServiceCard.css'

const MyServiceCard = ({ 
  title = "Service Title", 
  description = "Service description goes here.", 
  icon = null,
  bgColor = '#009e66',
  textColor = "text-white"
}) => {
  return (
    <div className="xl:w-1/3 md:w-1/2 p-4 mainCard">
      <div className={` p-6 rounded-lg h-full`}>
        <div className={`w-10 h-10 inline-flex items-center justify-center rounded-full ${textColor} mb-4`} style={{ backgroundColor: bgColor }}>
          {icon || (
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          )}
        </div>
        <h2 className="text-lg text-white font-medium title-font mb-2">
          {title}
        </h2>
        <p className="leading-relaxed text-base">
          {description}
        </p>
      </div>
    </div>
  )
}

export default MyServiceCard