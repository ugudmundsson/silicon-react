import transfer1 from './assets/transfer1.svg'
import transfer2 from './assets/transfer1.svg'
import transfericon1 from './assets/transfericon1.svg'
import transfericon2 from './assets/transfericon2.svg'
import './Page4.css'


function Page4() {
    return (
        <div className="page4">
<div className="transfer-grid container">
    <div className="transfer-head" id="transfer-head1">
        <h3>Make your money transfer simple and clear</h3>
        <div className="transfer-box">
            <div className="transfer-text">
                <div>
                    <p><span><i id="checkmark" className="fa-regular fa-circle-check"></i></span>banking transactions are free for you</p>
                </div>
                <div>
                    <p><span><i id="checkmark" className="fa-regular fa-circle-check"></i></span>No monthly cash commission</p>
                </div>
                <div>
                    <p><span><i id="checkmark" className="fa-regular fa-circle-check"></i></span>Manage payments and transactions online</p>
                </div>
            </div>
        </div>
    </div>
    <div id="transfer-img1">
        <img src={transfer1} alt="Bild med Diagram "/>
    </div>
    <div  id="transfer-img2">
        <img src={transfer2} alt="Bild med kontakter"/>
    </div>
    <div className="btn-transfer-grp" id="btn-transfer1">
        <button className="btn-transfer">
            <p>Learn more</p>
            <i className="fa-solid fa-arrow-right"></i>   
        </button>
    </div>
    <div className="transfer-head"  id="transfer-head2">
        <h2>Receive payment from international bank details</h2>
    </div>
    <div className="transfer-icon" id="transfer-icon">
        <div className="icon-text">
            <img src={transfericon1} alt="Icon"/>
            <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
        </div>
        <div className="icon-text">
            <img src={transfericon2} alt="Icon"/>
            <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
        </div>
    </div>
    <div className="btn-transfer-grp" id="btn-transfer2">
        <button className="btn-transfer">
            <p>Learn more</p>
            <i className="fa-solid fa-arrow-right"></i>
        </button> 
    </div>
</div>
</div>
    )
}

export default Page4