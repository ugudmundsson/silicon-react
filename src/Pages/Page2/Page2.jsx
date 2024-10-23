import mobilefeatures from '../Page2/assets/mobilefeatures.svg'
import easy from '../Page2/assets/easyicon.svg'
import cost from '../Page2/assets/costicon.svg'
import regular from '../Page2/assets/regularicon.svg'
import data from '../Page2/assets/dataicon.svg'
import support from '../Page2/assets/supporticon.svg'
import top from '../Page2/assets/topicon.svg'
import './Page2.css'

function Page2() {
  return (
    <div>
        <section className="page2-bg">
        <div className="features container">
            <div id="mobilfeatures">
                <img className="mobilfeatures" src={mobilefeatures} alt="Features"/>
            </div>
            <div id="appfeatures">
                <h2>App Features</h2>
            </div>
            <div id="apptext">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
            </div>
            <div id="icon1" className="iconer">
                <div className="icon">
                    <img src={easy} alt="Icon"/>
                </div>
                <div className="icontext">
                    <p className="iconheader">Easy Payments</p>
                    <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo. </p>
                </div>
            </div>
            <div id="icon2"  className="iconer">
                <div className="icon">
                    <img src={cost} alt="Icon"/>
                </div>
                <div className="icontext">
                    <p className="iconheader">Cost Statistics</p>
                    <span>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</span>
                </div>
            </div>
            <div  id="icon3" className="iconer">
                <div className="icon">
                    <img src={regular} alt="Icon"/>
                </div>
                <div className="icontext">
                    <p className="iconheader">Regular Cashback</p>
                    <span>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</span>
                </div>
            </div>
            <div  id="icon4" className="iconer">
                <div className="icon">
                    <img src={data} alt="Icon"/>
                </div>
                <div className="icontext">
                    <p className="iconheader">Data Security</p>
                    <span>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </span>
                </div>
            </div>
            <div id="icon5" className="iconer">
                <div className="icon">
                    <img src={support} alt="Icon"/>
                </div>
                <div className="icontext">
                    <p className="iconheader">Support 24/7</p>
                    <span>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</span>
                </div>
            </div>
            <div id="icon6" className="iconer">
                <div className="icon">
                    <img src={top} alt="Icon"/>
                </div>
                <div className="icontext">
                    <p className="iconheader">Top Standards</p>
                    <span>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</span>
                </div>
            </div>
        </div>
</section>
    </div>
  )
}
export default Page2