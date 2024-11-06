import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Nav from './Pages/Nav/Nav'
import './index.css'
import Home from './Home'
import Contact from './Pages/Contact/Contact'



function App() {
  
  const [DarkMode, setDarkMode] = useState(false)
  
  const toggleThem=() => {
      document.body.classList.toggle('dark');
    setDarkMode((prev) => {!prev} );
  };

  return (

<BrowserRouter>
  <Nav toggleThem={toggleThem} DarkMode={DarkMode}/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
</BrowserRouter>
  
  )
}
export default App




