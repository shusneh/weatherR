import React from "react";
import { useState } from 'react';
import  Input  from "./component/Input";
import WeatherInfo from "./hooks/WeatherHook";
import { useEffect } from "react";
function App() {
  const [city,setCity]=useState("Patna")
   const weatherData=WeatherInfo(city)
   //weatherData["weather"];
   const [temp,setTemp]=useState(0);
   
   
   function print() {
     setTemp(weatherData.main.temp);
     console.log(weatherData.main.temp)
   }
  return (
    <>
    <form onSubmit={(e)=>{
      e.preventDefault();
      print();
    }}>
      
     <Input  
     city={city}
     setCity={(val)=>setCity(val)}
      temp={temp}
     />
     <button type="submit">check your weather</button>
     </form>
     
    </>
  )
}

export default App
