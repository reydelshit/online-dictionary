import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import Meaning from './secondary/Meaning';

import Title from './secondary/Title'

const DictionaryResult = () => {

  const {showError, storeWord, showLoading} = useContext(MainContext);

  // console.log(errorMessage)

  

  return (
    <>
      {showLoading && <div className='loading__screen_container'>
        <div className="spinner"></div>
        </div>}
      {storeWord === null ? <div className='default__result'>Hi, you can search any word you want! 😁</div> : 
      <div className='dictionary__result__container'>
        {showError ? <div className='default__error'>ERROR 😡</div> : 
        <>
        {!showLoading && <>
          <Title />
          <Meaning />
          </>}
        </>}
      </div>}
    </>

    
  )
}

export default DictionaryResult