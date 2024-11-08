import { useState, useEffect } from 'react'
import Accordion from "./Accordion"


const AccordionTogg = () => {
  
  
    const [accordionData, setaccordionData] = useState([]);
    useEffect(() => {
      fetch('https://win24-assignment.azurewebsites.net/api/faq')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
            setaccordionData(data);
        });
    }, [])
  
    return (
     
    <div className="accord">
    {accordionData.map((accord) => (
      <Accordion key={accord.id} title={accord.title} content={accord.content}/>
    ))}
  </div>
  
  )
}
export default AccordionTogg
