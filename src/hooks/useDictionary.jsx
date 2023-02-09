import React, {useEffect, useState} from 'react'

const useDictionary = () => {

  const [storeWord, setStoreWord] = useState(null);

  const [storeMeaning, setStoreMeaning] = useState([]);

  const [runSearch, setRunSearch] = useState(false);

  // const [errorMessage, setErrorMessage] = useState(false)
  const [showError, setshowError] = useState(false)


  useEffect(() => {

    try{
      const fetchWordToDetermineMeaning = async () => {
        const fetchData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${storeWord}`);


        if(fetchData.status !== 200){
          setshowError(true)
          console.log('not 2022')
          return;
        }

          const data = await fetchData.json();
          setStoreMeaning(data);
          console.log(data)

          setshowError(false)
      }

      fetchWordToDetermineMeaning();

  
    } catch(error){
      // setErrorMessage('ERRORRRRRRRRRRRRRRRRRRRRRRRRRR')
    }
 
  }, [runSearch])
  

  const searchWord = () => {
    setRunSearch(!runSearch)
    console.log(storeWord)

  }

  return {setStoreWord, searchWord, storeMeaning, showError}
}

export default useDictionary