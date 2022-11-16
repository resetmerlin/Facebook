import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="login__footer">
      <div className="login__footer__wrap">
        <Link to={"/"}>한국어</Link>
        <Link to={"/"}>English (US)</Link>
        <Link to={"/"}>Tiếng Việt</Link>
        <Link to={"/"}>Bahasa Indonesia</Link>
        <Link to={"/"}>ภาษาไทย</Link>
        <Link to={"/"}>Español</Link>
        <Link to={"/"}>中文(简体)</Link>
        <Link to={"/"}>日本語</Link>
        <Link to={"/"}>Português (Brasil)</Link>
        <Link to={"/"}>Français (France)</Link>
        <Link to={"/"}>Deutsch</Link>
        <Link to={"/"} className="footer__square">
          <i className="plus_icon"></i>
        </Link>
      </div>
      <div className="footer_splitter"></div>
      <div className="login__footer__wrap">
        <Link to={"/"}>Sign Up</Link>
        <Link to={"/"}>Log in</Link>
        <Link to={"/"}>Messenger</Link>
        <Link to={"/"}>Facebook Lite</Link>
        <Link to={"/"}>Watch</Link>
        <Link to={"/"}>Games</Link>
        <Link to={"/"}>Marketplace</Link>
        <Link to={"/"}>Facebook Pay</Link>
        <Link to={"/"}>Oculus</Link>
        <Link to={"/"}>Portal</Link>
        <Link to={"/"}>Instagram</Link>
        <Link to={"/"}>Bulletin</Link>
        <Link to={"/"}>Local</Link>
        <Link to={"/"}>Fundraisers</Link>
        <Link to={"/"}>Services</Link>
        <Link to={"/"}>Voting Information Centre</Link>
        <Link to={"/"}>Group</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Create ad</Link>

        <Link to={"/"}>Create Page</Link>
        <Link to={"/"}>Developers</Link>
        <Link to={"/"}>Careers</Link>
        <Link to={"/"}>Privacy</Link>

        <Link to={"/"}>Cookies</Link>
        <Link to={"/"}>
          Adchoices
          <i className="adChoices_icon"></i>
        </Link>

        <Link to={"/"}>Terms</Link>
        <Link to={"/"}>Help</Link>
      </div>
      <div className="login__footer__wrap">
        <Link to={"/"} style={{ fontsize: "12px", marginTop: "10px" }}>
          Meta © 2022
        </Link>
      </div>
    </footer>
  );
};
