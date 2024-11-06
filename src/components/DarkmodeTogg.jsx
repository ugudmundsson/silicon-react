import '../Pages/Nav/Nav.css'




const DarkmodeTogg = ({ DarkMode, toggleThem}) => {
  

    return (
        <div className="toggle-switch">
            <span id="textdarkmode">Dark Mode</span>
            <input className='inputtoggle' onChange={toggleThem} checked={DarkMode} type="checkbox" name="" id="darkmode-toggle" />
            <label className='darklabel' htmlFor="darkmode-toggle"></label>
        </div>  
  )
}
export default DarkmodeTogg