import { Link } from "react-router-dom";
import logo from "../assets/ADITYA-BHOSALE.gif";
import "./header.scss";
function Header() {
  return (
    <>
      <div className="header-logo">
        <img src={logo} alt="loading..." />
      <div className="routes">
        <Link to="">Home</Link>
        <Link to="about">About</Link>
        <Link to="skills">Skills</Link>
        <Link to="contact me">Contact me</Link>
      </div>
      </div>
    </>
  );
}

export default Header;
