import "./footer.scss";
import Find from "../assets/location.png";
import Call from "../assets/avatar.png";
import Mail from "../assets/mail.png";
function Footer() {
  return (
    <div className="footer">
        <div>
        <img src={Find} alt="icon loading..." title="https://www.linkedin.com/in/aditya-bhosale-107682249/"/>Find Me
        </div>
        <div>
        <img src={Call} alt="icon loading..." title="8766971902"/>Call Me
        </div>
        <div>
        <img src={Mail} alt="icon loading..." title="aditya.bhosale7517@gmail.com"/>Mail Me
        </div>
    </div>
  );
}

export default Footer;
