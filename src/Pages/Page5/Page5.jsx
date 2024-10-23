import quotesicon from '../Page5/assets/quotesicon.svg'
import rating1 from '../Page5/assets/rating1.svg'
import rating2 from '../Page5/assets/rating2.svg'
import clientface1 from '../Page5/assets/clientface1.svg'
import clientface2 from '../Page5/assets/clientface2.svg'
import './Page5.css'
import { useState, useEffect } from 'react';
import Cards from '../../components/Cards'

function Page5 () {

   return (
<div className="pg5-bg">
    <div className="client-grid container">
        <div className="client-head">
            <h3>Clients are Loving Our App</h3>
        </div>
        <Cards />
    </div>
</div>
    )

}

export default Page5