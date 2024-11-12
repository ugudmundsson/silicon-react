import { useState, useEffect } from 'react';
import '../Pages/Page5/Page5.css'
import quotes from '../Pages/Page5/assets/quotesicon.svg'

function Cards() {
  
        const [box, setBox] = useState([]);
        useEffect(() => {
          fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
            .then((res) => {
              return res.json();
            })
            .then((data) => {
                setBox(data);
            });
        }, [])
    


        const renderStars = (starRating) => {
            const starArray = [];
            for (let i = 0; i < starRating; i++) {
              starArray.push(<i className="fa-solid fa-star" key={i}></i>);
            }
            if (starRating < 5) {
              for (let i = 5; starRating < i; i--) {
                starArray.push(<i className="fa-light fa-star" key={i}></i>);
              }
            }
            return starArray;
          };


    return (
<div id="box">
    {box.map((card) => (
        <div  key={card.id}>
                <div className="client-box" id="client-box1">
                <p>{card.comment}</p>
                <div id="quotesicon1">
                    <img src={quotes} alt="Quote"/>
                </div>
                <div id="rating1">
                    {renderStars(card.starRating)}
                </div>
                <div id="clientface1">
                    <img src={card.avatarUrl} alt="Client Face"/>
                </div>
                <div id="clientname1">
                    <h5>{card.author}</h5>
                </div>
                <div id="work">
                   <p>{card.jobRole}</p> 
                </div>
                </div>
        </div>        
    ))}
</div>    
  )
}
export default Cards