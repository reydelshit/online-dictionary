import DictionaryResult from "./components/DictionaryResult";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import useDictionary from "./hooks/useDictionary";

import { MainContext } from "./context/MainContext";
import { ThemeContext } from "./context/ThemeContext";


// images 
import audioIcon from './assets/audio.svg';
import searchIcon from './assets/search.svg'
import arrowDown from './assets/arrow.svg'
import sun from './assets/sun.svg';
import moon from './assets/moon.svg';
import { useState } from "react";

function App() {

  const [theme, setTheme] = useState('light');

  const {setStoreWord, searchWord, storeMeaning, showError, storeWord} = useDictionary();

  return (
    <MainContext.Provider value={{setStoreWord, searchWord, storeMeaning, showError, storeWord, audioIcon, searchIcon, arrowDown, sun, moon}}>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <div className="app" id={theme}>
          <Header />
          <SearchBar />
          <DictionaryResult />
        </div>
      </ThemeContext.Provider>
    </MainContext.Provider>
  )
}

export default App
