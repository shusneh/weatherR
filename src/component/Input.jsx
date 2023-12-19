import React from "react";

 function Input(
   {city,
    setCity,
    temp,}
) {
    //console.log(weatherData[0]);
    return (
   <div>
    <input type="text" placeholder="Please enter your city name" onChange={(e)=>{
        setCity(e.target.value);
    }} />
    <div>
    <label >You selection is for {city}</label>
    </div>
    <div>
    <label >Temperature near your ciy is {temp}</label>
    </div>
    
   </div> 
    )

}

export default Input