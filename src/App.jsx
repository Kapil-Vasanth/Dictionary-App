import { useState } from 'react'
import './App.css'

const Dictionary = [
  { word: "React", meaning: "A JavaScript library for building user interfaces." },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." }
]

function App() {
  const [def, setDef] = useState("")
  const [search,setSearch] = useState("");

  const searchDict = (e) => {
    let searchText = search.toString();
    let foundValue = Dictionary.find(dict => dict.word.toLowerCase() === searchText.toLowerCase())?.meaning
    if(foundValue)
    setDef(foundValue)
    else
    setDef("Word not found in the dictionary.")
  }

  return (
    <>
      <h1>Dictionary App</h1>
      <input type="text" name="search" id="search" onChange={(e) => setSearch(e)}/>
      <button onClick={() => searchDict()}>Search</button> <br />
      <strong>Definition:</strong> 
      <p>{def}</p>
    </>
  )
}

export default App
