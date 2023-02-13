import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import Meaning from './secondary/Meaning';

import Title from './secondary/Title'

const DictionaryResult = () => {

  const {showError, storeWord, showLoading} = useContext(MainContext);

  // console.log(errorMessage)

  

  return (
    <div>
      {showLoading && <div className='loading__screen_container'>
        <div className="spinner"></div>
        </div>}
      {storeWord === null ? <div className='default__result'>Hi, you can search any word you want! 😁</div> : <div>
        {showError ? <div className='default__error'>ERROR 😡</div> : 
        <div>
          <Title />
          <Meaning />
        </div>}
      </div>}
    </div>

    
  )
}

export default DictionaryResult