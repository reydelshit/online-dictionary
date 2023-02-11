import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
import Meaning from './secondary/Meaning';

import Title from './secondary/Title'

const DictionaryResult = () => {

  const {showError} = useContext(MainContext);

  // console.log(errorMessage)
  return (
    <div>
      {showError ? <div>ERROR SIR</div> : 
      <div>
        <Title />
        <Meaning />
      </div>}
    </div>
  )
}

export default DictionaryResult