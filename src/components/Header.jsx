import React, { useContext, useState } from 'react'
import { MainContext } from '../context/MainContext';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {

  const selectFonts = ['Inter', 'Roboto', 'Zeyada'];
  const [openSelection, setOpenSelection] = useState(false)
  const {selectedFont, setSelectedFont, arrowDown, moon, sun} = useContext(MainContext);
  const {theme, setTheme} = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme((current) => current === "light" ? "dark" : "light")
  }

  return (
    <header>
      <div className='header__container'>
        <h1>Logo</h1>
        <div className='leftside__navigation'>
          <div className='selectFonts__button' onClick={() => setOpenSelection(!openSelection)}>{selectedFont} <img src={arrowDown} alt="arrow" /></div>
          {openSelection && 
            <div className='selectFonts__container'>
              {selectFonts.map((font, index) => (
                <span key={index} onClick={() => setSelectedFont(font)}>{font}</span>
              ))}
            </div>
          }

          <div>
            <button onClick={toggleTheme}>
              {theme === 'light' ? <img src={moon} alt="moon" /> : <img src={sun} alt="sun" />}
            </button>
          </div>
        </div>


      </div>
    </header>
  )
}

export default Header