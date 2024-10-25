import logo from "../Nav/assets/logo.svg";
import toggle from "../Nav/assets/togglebtn.svg";
import sign from "../Nav/assets/sign-in.svg";
import "./Nav.css";
import DarkmodeTogg from "../../components/DarkmodeTogg";


function Nav() {
  
  

  
    return (
    <>
      <header>
        <div className="container">
          <div className="nav">
          <a id="logo" href="index.html">
            <img src={logo} alt="Silicon logo" />
            <span className="silicon-logo">Silicon</span>
          </a>
          <div className="navmenu">
          <nav id="main-menu" className="navbar">
            <a className="nav-link" href="#">
              Features
            </a>
          </nav>
          <nav id="main-menu" className="navbar">
            <a className="nav-link" href="#">
              Contact
            </a>
          </nav>
          </div>
          </div>
          <DarkmodeTogg />
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
