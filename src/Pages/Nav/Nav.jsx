import logo from '../Nav/assets/logo.svg'
import toggle from '../Nav/assets/togglebtn.svg'
import sign from '../Nav/assets/sign-in.svg'
import './Nav.css'

function Nav() {


    return (
   <>
    <header>
        <div className="container">
             <a id="logo" href="index.html"><img src={logo} alt="Silicon logo"/>
                 <span className="silicon-logo">Silicon</span>
             </a>
            <nav id="main-menu" className="navbar">
                <a className="nav-link" href="#">Features</a>
            </nav>
            <div className="toggle-switch">
                <span id="textdarkmode">Dark Mode</span>
                <input type="checkbox" name="" id="darkmode-toggle"/>
                <label htmlFor="darkmode-toggle"></label>
               <a id="auth-signin" href="#" className="btn-primary">
                    <img src={sign} alt="Auth"/>
                    <span>Sign in / up</span>
                </a>
                <button className="btn-mobile">
                    <img src={toggle} alt="Hamburgar nav"/>
                </button>
            </div>
        </div>

    </header> 
    </>        
    )
}

export default Nav