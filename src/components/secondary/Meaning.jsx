import React, { useContext } from 'react'

import { MainContext } from '../../context/MainContext'


const Meaning = () => {

    const {storeMeaning} = useContext(MainContext);

  return (
    <div>
        {/* {storeMeaning.map((meaning, index) => {
            return (
                <div key={index}>
                    <h1></h1>
                </div>
            )
        })} */}
    </div>
  )
}

export default Meaning