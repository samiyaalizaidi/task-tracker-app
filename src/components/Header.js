// import PropTypes from 'prop-types'
// Notes:
// - Template used by: `rafce` + enter
// - PropTypes used by: `impt` + enter

import Button from "./Button"

// import React from 'react' // dont need this anymore

// arrow function component
const Header = ({title = 'Task Tracker'}) => {

    const onClick = () => {
        console.log("Click")
    }
    
    return (
        <header className="header">
            <h1>{title}</h1>
            {/* adding a button */}
            <Button 
                color="green" 
                text="Add"
                onClick={onClick}
            />
        </header>
    )
}   

// Header.defaultProps = {
//     title: 'Task Tracker',
// } -> not support for arrow functions anymore, use the default parameters example above


// Header.propTypes = {
//     title: PropTypes.string.isRequired,
// } -> not supported anymore, will be ignored. use typescript if you want to use this

// can be used for CSS styling inline for JSX tags
// const headingStyle = {
//     color:'red', 
//     backgroundColor:'black'
// }

export default Header