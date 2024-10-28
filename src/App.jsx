import { useState, useEffect } from 'react'
import Nav from './Pages/Nav/Nav'
import Hero from './Pages/Hero/Hero'
import Spons from './Pages/Spons/Spons'
import Page2 from './Pages/Page2/Page2'
import Page3 from './Pages/Page3/Page3'
import Page4 from './Pages/Page4/Page4'
import Page5 from './Pages/Page5/Page5'
import Page6 from './Pages/Page6/Page6'
import Page7 from './Pages/Page7/Page7'
import Footer from './Pages/Footer/Footer'
import './index.css'

function App() {
  
  const [DarkMode, setDarkMode] = useState(false)
  
  const toggleThem=() => {
      document.body.classList.toggle('dark');
    setDarkMode((prev) => {!prev} );
  };

  return (
<>
<Nav toggleThem={toggleThem} DarkMode={DarkMode}/>
<Hero />
<Spons />
<Page2 />
<Page3 />
<Page4 />
<Page5 />
<Page6 />
<Page7 />
<Footer />   
</>
  )
}
export default App
