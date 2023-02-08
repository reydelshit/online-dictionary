import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'
const SearchBar = () => {

  const {setStoreWord, searchWord} = useContext(MainContext)

  return (
    <div className='search__input__container'>
      <input type="text" placeholder='starting typing..' onChange={(e) => setStoreWord(e.target.value)}/>

      <span onClick={() => searchWord()}>O</span>
    </div>
  )
}

export default SearchBar