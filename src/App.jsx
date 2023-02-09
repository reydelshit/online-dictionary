import DictionaryResult from "./components/DictionaryResult";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import useDictionary from "./hooks/useDictionary";

import { MainContext } from "./context/MainContext";

function App() {

  const {setStoreWord, searchWord, storeMeaning, showError} = useDictionary();

  return (
    <MainContext.Provider value={{setStoreWord, searchWord, storeMeaning, showError}}>
      <div className="app">
        <Header />
        <SearchBar />
        <DictionaryResult />
      </div>
    </MainContext.Provider>
  )
}

export default App
