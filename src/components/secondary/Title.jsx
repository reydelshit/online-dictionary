import React, { useContext, useState } from 'react'

import { MainContext } from '../../context/MainContext'


const Title = () => {

    const {storeMeaning, audioIcon} = useContext(MainContext);
    

    const getTheAudio = document.querySelector('.audio-player');

    const playAudio = () => {

      getTheAudio.play();

    }
  return (
    <>

    
          {storeMeaning && storeMeaning.slice(0, 1).map((meaning, index) => {
              // const meaning = storeMeaning[0];
              const pronunciation = meaning.phonetics.find(p => p.audio);
              const pho = meaning.phonetics.find(p => p.text);
                
                return (
                  <div className='dictionary__result__header' key={index}>
                    <div>
                      <h1>{meaning.word}</h1>
                      {pho && <p>{pho.text}</p>}
                    </div>
    
                  <audio className='audio-player' src={`${pronunciation && pronunciation.audio}`}></audio>
                  <button onClick={playAudio}>
                    <img src={audioIcon} alt="audio icon" />
                  </button>
    
                </div>
                )
            })
            }  
    </>
  )
}

export default Title