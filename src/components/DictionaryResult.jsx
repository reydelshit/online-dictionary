import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import Meaning from './secondary/Meaning';

import Title from './secondary/Title'

const DictionaryResult = () => {

  const {showError, storeWord} = useContext(MainContext);

  // console.log(errorMessage)

  

  return (
    <div>
     {storeWord === null ? <div className='default__result'>Hi, you can search any word you want! 😁</div> : <div>
        {showError ? <div>ERROR SIR</div> : 
        <div>
          <Title />
          <Meaning />
        </div>}
      </div>}
    </div>

    
  )
}

export default DictionaryResult