import logo from "../Nav/assets/logo.svg";
import sign from "../Nav/assets/sign-in.svg";
import "./Nav.css";
import DarkmodeTogg from "../../components/DarkmodeTogg";
import { Link } from "react-router-dom";
import { useState } from "react";
import Mobilenav from '../../components/Mobilenav'
import { GiHamburgerMenu } from "react-icons/gi";

function Nav({ DarkMode, toggleThem, }) {

  	const [NavVisable,setNavVisable] = useState (false)

    function handleClick() {
      setNavVisable(!NavVisable)
    }
      
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
            <button onClick={handleClick} className="burger" >
            <GiHamburgerMenu />
            </button>
            {NavVisable && <Mobilenav />}
        </div>
      </header>
    </>
  );
}

export default Nav;
