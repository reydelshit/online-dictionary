import React, {useEffect, useState} from 'react'

const useDictionary = () => {

  const [storeWord, setStoreWord] = useState(null);
  const [storeMeaning, setStoreMeaning] = useState([]);
  const [runSearch, setRunSearch] = useState(false);
  const [showError, setshowError] = useState(false)
  const [showLoading, setShowLoading] = useState(false)


  useEffect(() => {

      const fetchWordToDetermineMeaning = async () => {
        try{
            setshowError(false)
            setShowLoading(true)
          if(storeWord === null){
            setShowLoading(false)
          }

          if(storeWord !== null){
            const fetchData = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${storeWord}`);
            const data = await fetchData.json();
            setStoreMeaning(data);
            setShowLoading(false)

            console.log(data)
          }



        } catch(error){
            setShowLoading(false)
            setshowError(true)
            // console.log('error my ass')
            
        }
      }

      fetchWordToDetermineMeaning();

 
  }, [runSearch])
  

  const searchWord = () => {
    setRunSearch(!runSearch)
    console.log(storeWord)

  }

  return {setStoreWord, searchWord, storeMeaning, showError, storeWord, showLoading}
}

export default useDictionary