import notification from '../Page7/assets/notification.svg'
import './Page7.css'

function Page7() {
    return (

<div className="subscribe pg7-bg container">
    <div id="notification">
        <img src={notification} alt="Icon notification"/>
    </div>
    <div id="subshead">
        <h4>Subscribe to our newsletter <span className="subnews">to stay informed about latest updates</span></h4>
    </div>
    <div className="email">
        <i className="fa-regular fa-envelope"></i>
        <input className="input-sub" type="email" name="email" id="email" placeholder="Your Email"/>
        <button className="btn-sub">
            <span>Subscribe</span>
        </button>   
    </div>
</div>

    )
}

export default Page7