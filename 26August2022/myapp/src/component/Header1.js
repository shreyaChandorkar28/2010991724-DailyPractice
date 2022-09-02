import App from "../App";

// Uppercase of Header.js's H is naming convention
const Header1 = ({title1}) => {
    return (
    <header>
    <h1>Hello {title1}</h1>
    </header>
    );
    };

    Header1.defaultProps = {
        title: "Task Tracker",
      };
    export default Header1;