import logo from "../Nav/assets/logo.svg";
import toggle from "../Nav/assets/togglebtn.svg";
import sign from "../Nav/assets/sign-in.svg";
import "./Nav.css";
import DarkmodeTogg from "../../components/DarkmodeTogg";
import { Link } from "react-router-dom";


function Nav({ DarkMode, toggleThem }) {

  
    return (
    <>
      <header>
        <div className="container">
          <div className="nav">
          <Link id="logo" to='/'>
            <img src={logo} alt="Silicon logo" />
            <span className="silicon-logo">Silicon</span>
          </Link>
          <div className="navmenu">
          <nav id="main-menu" className="navbar">
            <Link className="nav-link" to='/'>
              Features
            </Link>
          </nav>
          <nav id="main-menu" className="navbar">
            <Link className="nav-link" to='/contact'>
              Contact
            </Link>
          </nav>
          </div>
          </div>
          <DarkmodeTogg toggleThem={toggleThem} DarkMode={DarkMode} />
            <a id="auth-signin" href="#" className="btn-primary">
              <img  src={sign} alt="Auth" />
              <span>Sign in / up</span>
            </a>
            <button className="btn-mobile">
              <img src={toggle} alt="Hamburgar nav" />
            </button>
        </div>
      </header>
    </>
  );
}

export default Nav;
