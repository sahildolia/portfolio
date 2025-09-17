import './HeadingwithBar.css'

const HeadingwithBar = ({ 
  title = "My Creative Heading", 
  subtitle = "", 
  center = true,
  showBar = true 
}) => {
  return (
    <div className={`heading-container ${center ? 'text-center' : ''}`}>
      {subtitle && (
        <div className="subtitle">{subtitle}</div>
      )}
      <h1 className="title">{title}</h1>
      {showBar && (
        <div className="animated-bar">
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  )
}

export default HeadingwithBar