import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Country.css"
import BasicModal from "./BasicModal";

export default function Country(){
  const [data,setData] = useState([]);
  const [error,setError] = useState(false);
  useEffect(()=>{
    let url = `https://restcountries.com/v2/all`
    fetch(url)
    .then((res)=> res.json())
    .then((res)=> {setData(res)
    
})
    .catch((err) =>setError(true))
    
  },[])
  //console.log(data)
  
    return <><h1>Country-finder</h1><div className="container">
        
        
        { data.map((e)=>{
            let details = {
                b:e.borders,
                c:e.currencies,
                l:e.languages
            }
            return <div className="cards" key={e.name}>
                <img src={e.flags.png} />
                <h4>{e.name}</h4>
                <h5>Population : {e.population}</h5>
                <h5>Region : {e.region}</h5>
                <h5>Capital : {e.capital}</h5>
                
                <BasicModal 
                props= {details}/>
            </div>
        })}

    </div></>
}