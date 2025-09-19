import "./Button.css"
const Button = ({ children, onClick }) => {
  return (
    
    <button className="btn content-download button-main button-scheme" onClick={onClick}>
      {children}
    </button>
    
  )
}

export default Button