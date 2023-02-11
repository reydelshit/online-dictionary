import React, { useContext, useState } from 'react'
import { MainContext } from '../context/MainContext';

const Header = () => {

  const selectFonts = ['Sans Serif', 'Serif', 'Mono'];
  const [selectedFont, setSelectedFont] = useState('Sans Serif');
  const [openSelection, setOpenSelection] = useState(false)

  const {arrowDown} = useContext(MainContext);


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
            <button>dark</button>
          </div>
        </div>


      </div>
    </header>
  )
}

export default Header