// 8 September 2022
import React from "react";
import PropTypes from 'prop-types'
import Button from "../Button/Button";
const Header = ({ title }) => {
    const onClick = (e) => {
        console.log('Click', e);
    }
    return (
        <header className='header'>
            <h1>Hello, {title}</h1>
            <Button color='green' text='Hello' onClick={onClick} />
        </header>
    )
}
const headingStyle = {
    color: 'darkcyan',
    backgroundColor: 'lightblue',
    textAlign: 'center'
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    // See changes for isRequired after remove defaultProps
    //<Header title = {1}/> in app.js will show the warining in console.
    title: PropTypes.string.isRequired,
}
export default Header;