import { useState,useRef } from 'react'
import './App.css'

const Dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
]

function App() {
  const [def, setDef] = useState("")
  const inputRef = useRef(null);

  const searchDict = () => {
    let searchText = inputRef.current.value
    let foundValue = Dictionary.find(dict => dict.word.toLowerCase() === searchText.toLowerCase())?.meaning
    if(foundValue)
    setDef(foundValue)
    else
    setDef("Word not found in the dictionary.")
  }


  return (
    <>
      <h1>Dictionary App</h1>
      
        <input type="text" name="search" id="search" ref={inputRef}/>
        <button onClick={() => searchDict()}>Search</button>
      
      
      Definition: {def}
     

      

    </>
  )
}

export default App
