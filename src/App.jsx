import DictionaryResult from "./components/DictionaryResult";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import useDictionary from "./hooks/useDictionary";

import { MainContext } from "./context/MainContext";



// images 
import audioIcon from './assets/audio.svg';
import searchIcon from './assets/search.svg'
import arrowDown from './assets/arrow.svg'

function App() {

  const {setStoreWord, searchWord, storeMeaning, showError} = useDictionary();

  return (
    <MainContext.Provider value={{setStoreWord, searchWord, storeMeaning, showError, audioIcon, searchIcon, arrowDown}}>
      <div className="app">
        <Header />
        <SearchBar />
        <DictionaryResult />
      </div>
    </MainContext.Provider>
  )
}

export default App
