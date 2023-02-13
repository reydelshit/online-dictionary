import DictionaryResult from "./components/DictionaryResult";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import useDictionary from "./hooks/useDictionary";
import { useState } from "react";

import { MainContext } from "./context/MainContext";
import { ThemeContext } from "./context/ThemeContext";


// images 
import audioIcon from './assets/audio.svg';
import searchIcon from './assets/search.svg'
import arrowDown from './assets/arrow.svg'
import sun from './assets/sun.svg';
import moon from './assets/moon.svg';
import book from './assets/book.svg';

function App() {

  const [theme, setTheme] = useState('light');
  const [selectedFont, setSelectedFont] = useState('Inter');


  const {setStoreWord, searchWord, storeMeaning, showError, storeWord, showLoading} = useDictionary();

  return (
    <MainContext.Provider value={{setStoreWord, searchWord, storeMeaning, showError, showLoading, storeWord, audioIcon, searchIcon, arrowDown, sun, moon, book, selectedFont, setSelectedFont}}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div className={`app ${theme} ${selectedFont}`}>
          <div className="main__container">
            <Header />
            <SearchBar />
            <DictionaryResult />
          </div>
        </div>
      </ThemeContext.Provider>
    </MainContext.Provider>
  )
}

export default App
