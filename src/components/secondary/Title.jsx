import React, { useContext } from 'react'

import { MainContext } from '../../context/MainContext'


const Title = () => {

    const {storeMeaning} = useContext(MainContext);


  return (
    <div>
        {storeMeaning.map((meaning, index) => {
            return (
                <div key={index}>
                    <h1>{meaning.word}</h1>
                    <p>{meaning.phonetic}</p>


                    <div>
                        he
                        <audio src="https://api.dictionaryapi.dev/media/pronunciations/en/result-us.mp3"></audio>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Title