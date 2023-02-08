import React, {useEffect, useState} from 'react'

const useDictionary = () => {

  const [storeWord, setStoreWord] = useState(null);

  const [storeMeaning, setStoreMeaning] = useState([]);

  const [runSearch, setRunSearch] = useState(false);


  useEffect(() => {

    try{
      const fetchWordToDetermineMeaning = async () => {
        const fetchData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${storeWord}`);
        const data = await fetchData.json();
  
        setStoreMeaning(data);
        console.log(storeMeaning);
        
      }

      fetchWordToDetermineMeaning();

  
    } catch(error){
      setStoreMeaning('error')
    }
    

  }, [runSearch])
  

  const searchWord = () => {
    setRunSearch(!runSearch)
  }

  return {setStoreWord, searchWord, storeMeaning}
}

export default useDictionary