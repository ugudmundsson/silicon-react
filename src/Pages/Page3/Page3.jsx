import slidergrp from '../Page3/assets/slidergrp.svg'
import slider1 from '../Page3/assets/slider1.svg'
import slider2 from '../Page3/assets/slider2.svg'
import slider3 from '../Page3/assets/slider3.svg'
import './Page3.css'

function Page3 () {
    return (
<div className="pg3-bg">
    <div className="slider-work container">
    <div className="pg3-head">
        <h3>How Does It Work?</h3>
    </div>
    <div className="slidergrp">
        <img src={slidergrp} alt="Mobiltfelefoner"/>
    </div>
    <div className="slider-mobiler">
        <div id="slider1">
            <img src={slider1} alt="Olika Mobiler"/>
        </div>
        <div id="slider2">
            <img src={slider2} alt="Olika Mobiler"/>
        </div>
        <div id="slider3">
            <img src={slider3} alt="Olika Mobiler"/>
        </div>
    </div>
    <div className="pg3-text">
        <h3 id="pg3-h4">Latest transaction history</h3>
        <p id="pg3-text">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in consectetur condimentum. </p>
    </div>
    </div>
</div>
    )
}

export default Page3