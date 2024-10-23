import spons1 from './assets/spons1.svg'
import spons2 from './assets/spons2.svg'
import spons3 from './assets/spons3.svg'
import spons4 from './assets/spons4.svg'
import spons5 from './assets/spons5.svg'
import spons6 from './assets/spons6.svg'
import './Spons.css'

function Spons () {
    return (
<div id="spons" className="spons-bg">
            <div className="container">
                <div id="spons1" className="spons-box">
                    <img src={spons1} alt="Spons1"/>
                </div>
                <div id="spons2" className="spons-box">
                    <img src={spons2} alt="Spons2"/>
                </div>
                <div id="spons3" className="spons-box">
                    <img src={spons3} alt="Spons3"/>
                </div>
                <div id="spons4" className="spons-box">
                    <img src={spons4} alt="Spons4"/>
                </div>
                <div id="spons5" className="spons-box">
                    <img src={spons5} alt="Spons5"/>
                </div>
                <div id="spons6" className="spons-box">
                    <img src={spons6} alt="Spons6"/>
                </div>
            </div>
</div>
    )
}
export default Spons