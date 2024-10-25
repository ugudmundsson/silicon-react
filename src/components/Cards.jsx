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
                console.log(data);
            })
            .catch((err) => {
                console.log(err); 
            });
        }, [])
    
        
        
        const renderStars = (rating) => {
            const totalStars = 5;
            const fullStars = Math.floor(rating);
            const halfStar = rating % 1 !== 0;
            const emptyStars = totalStars - fullStars - (halfStar ? 1 : 0);
    
            return (
                <div>
                    {Array(fullStars).fill("★").map((star, index) => <span key={`full-${index}`}>{star}</span>)}
                    {halfStar && <span>☆</span>} {}
                    {Array(emptyStars).fill("☆").map((star, index) => <span key={`empty-${index}`}>{star}</span>)}
                </div>
            );
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