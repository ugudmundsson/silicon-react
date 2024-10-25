import '../Pages/Nav/Nav.css'
import { useState } from 'react'




const DarkmodeTogg = () => {
  
    const [DarkMode, setDarkMode] = useState()

    const toggleThem = () => {
      setDarkMode(theme => !theme)
    }
  
  
    return (
        <div className="toggle-switch">
            <span id="textdarkmode">Dark Mode</span>
            <input onClick={toggleThem} className={`post ${DarkMode ? 'dark' : ''}`} type="checkbox" name="" id="darkmode-toggle" />
            <label htmlFor="darkmode-toggle"></label>
        </div>  
  )
}
export default DarkmodeTogg