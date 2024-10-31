import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import Contact from './Pages/Contact/contact.jsx'





createRoot(document.getElementById('root')).render(

<BrowserRouter>
  <Routes>
    <Route path='/' element={<App />} />
    <Route path='/contact' element={<Contact />} />
  </Routes>
</BrowserRouter>,


)







// {/* <StrictMode>
// <App />
// </StrictMode> */}