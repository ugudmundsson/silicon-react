import React from "react"
import { Link, useLocation } from "react-router-dom"
import '../components/Breadcrumb.css'
import House from '../components/assets/house.svg'
import Arrow from '../components/assets/arrow-right.svg'

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
      <section>
        <div>
          <div className="breadcrumb">
            <div className="bread-home">
              <img src={House} alt="" />
              <Link to='/'>Homepage</Link>
              </div>
            {
              pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join('/')}`;

                return (
                  <div className="bread-arrow" key={to}>
                    <img src={Arrow} alt="" />
                    { index === pathnames.length -1 
                      ? (<span>{value.replace(/-/g, ' ')}</span>)
                      : (<Link to={to}>{value.replace(/-/g, ' ')}</Link>)}
                  </div>
                );
              })
            }
          </div>
        </div>
      </section>
  );
};
export default Breadcrumb