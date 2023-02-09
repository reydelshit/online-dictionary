import React, { useContext, useState} from 'react'

import { MainContext } from '../../context/MainContext'


const Meaning = () => {

    const {storeMeaning} = useContext(MainContext);


  return (
    <div>
        {storeMeaning && storeMeaning.map((he, index) => {
            
            return (
                <div key={index}>
                    {he.meanings.map((hes, index) => {

                        const {definitions, synonyms, antonyms, partOfSpeech} = hes;
                        return (
                            <div key={index}>
                                <h1>{partOfSpeech}</h1>

                                <span>meanings</span>
                                {definitions.map((def, index) => {
                                    const {definition, synonyms, antonyms, examples} = def
                                    return (
                                        <div key={index}>
                                            <p>{definition}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            )
        })}
    </div>
  )
}

export default Meaning