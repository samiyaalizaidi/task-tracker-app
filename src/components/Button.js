const Button = ({ color='steelblue', text, onClick }) => {
  return (
    // was initialy added without the component, but now we have a separate file
    // for this JSX component
    <button onClick={onClick} style={{backgroundColor: color}} className="btn">
        {text}
    </button>
  )
}

export default Button