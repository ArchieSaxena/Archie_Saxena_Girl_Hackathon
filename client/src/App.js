import './App.css';
import  { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const[symptoms,setSymptoms]=useState("acidity");
  const[data,setData]=useState([{}])
  useEffect(() => {
    fetchData();
  }, [])
  const fetchData= async()=>{
    try{
      const response = await fetch(`http://localhost:5000/predict`,{
            method:'POST',
            mode: "no-cors",
            body:JSON.stringify({symptoms:"acidityy"}),
            headers : {
            'Content-Type':'application/json'
      },
    })
      console.log("jddddddksl",response)

      const jsonData=await response.json();
      console.log("jksdl",jsonData);
      setData(jsonData)
    }
    catch(err){
      console.log(err)
    }
  }
   
  return (
    <div className="App">
      <h1>Hello Archu</h1>
    </div>
  );
}

export default App;
