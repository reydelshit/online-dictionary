import React, { useContext, useState} from 'react'

import { MainContext } from '../../context/MainContext'


const Meaning = () => {

    const {storeMeaning} = useContext(MainContext);


  return (
    <>
        {storeMeaning && storeMeaning.slice(0, 1).map((he, index) => {
            
            return (
                <div className='meaning__container' key={index}>
                    {he.meanings.map((hes, index) => {

                        const {definitions, synonyms, antonyms, partOfSpeech} = hes;
                        return (
                            <div className='individual__meaning' key={index}>
                                <h1>{partOfSpeech}</h1>

                                <span>meanings</span>

                                <ul className='individual__meaning__container' key={index}>
                                {definitions.map((def, index) => {
                                    const {definition, synonyms, antonyms, examples} = def
                                    return (
                                        <li key={index}>{definition}</li>
                                    )
                                })}
                                 </ul>

                            </div>
                        )
                    })}
                </div>
            )
        })}
    </>
  )
}

export default Meaning