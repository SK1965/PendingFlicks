import './App.css'
import Movies from './components/movies'
import Input from './components/Input'
import { useState } from 'react'
export default function App() {

let [movis , setmovis] = useState([])
const addval=(data)=>{
      setmovis([...movis , data])
}
const remval=(data)=>{
 
   setmovis(movis.filter(elem=>elem!=data))
  
}
return  <div className="container con">
      <div className="top"> <h1>PendingFlicks</h1>
      <h3>A Curated list of Most Amazing Movies!</h3>
      </div>
      <Movies name= {movis} remval={remval}></Movies>
      <Input addval ={addval}></Input>
      {console.log(movis)}
      </div>
      
}


