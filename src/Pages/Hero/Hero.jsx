import google from './assets/googlestore.svg'
import apple from './assets/applestore.svg'
import phones from './assets/phones.svg'
import './Hero.css'

function Hero() {
    return (
<>
    <div className='bg-hero'>  
        <div className="container grid ">
                <div className="textfront" id="item-head">
                    <h1 className="head">Manage All Your Money in One App</h1>
                </div>
                <div className="textfront" id="item-text">
                    <p className="text">We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
                </div>   
                <div className="store" id="item-store">
                    <button className="store-btn"><img id="applestore" src={apple} alt=""/></button>
                    <button className="store-btn">
                            <div className="googlestore"> 
                                <img src={google} alt=""/>
                                <div>
                                    <span id="googleget">GET IN ON </span>
                                    <span id="googleplay">Google Play</span>
                                </div>
                            </div>
                    </button>
                </div>
                <div className="discover" id="item-discover">
                    <button className="discover-btn">
                        <i className="fa-solid fa-angle-down"></i>
                    </button>
                    <span>Discover more</span>
                </div>
            <div className="mobiler" id="item-mobiler">
                <img src={phones} alt="Mobiltelefoner"/>
            </div>
        </div>
    </div>      
</>
    )
}
export default Hero