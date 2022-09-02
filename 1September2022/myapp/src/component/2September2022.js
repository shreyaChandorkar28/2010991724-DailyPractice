import App from "../App";

// Uppercase of Header.js's H is naming convention
const Header = (props) => {
    return (
    <header>
    <h1>Hello {props.title}</h1>
    </header>
    );
    };
    export default Header;