import { useEffect } from "react";
import { useState } from "react";

function WeatherInfo(city)  {
    const [data,setData]=useState({});

   useEffect(()=>{
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=32ca7f1be27a6d185e5b23687330de25&units=metric")
    .then((res)=>res.json())
    .then((res)=>setData(res))
   },[city])
   return data;
}

export default WeatherInfo