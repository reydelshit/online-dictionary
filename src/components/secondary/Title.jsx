import React, { useContext } from 'react'

import { MainContext } from '../../context/MainContext'


const Title = () => {

    const {storeMeaning} = useContext(MainContext);

  return (
    <>
            {storeMeaning && storeMeaning.map((meaning, index) => {
                const pronunciation = meaning.phonetics.find(p => p.audio);
                const phonetic = meaning.phonetics.find(p => p.text);


                return (
                    <div key={index}>
                        <h1>{meaning.word}</h1>
                        <p>{phonetic.text}</p>

                        <audio controls src={`${pronunciation.audio}`}></audio>
                    </div>
                )
            })
            }  
    </>
  )
}

export default Title