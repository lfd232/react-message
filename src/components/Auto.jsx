import React, { useState } from 'react'



 const Auto = () => {
  const [date, setDate]=useState("2026-03-12")
  const handleClick=(event)=>{
    setDate(event.target.value)
    console.log(date)
  }
  return (
    <div className='form'>
        <p>REGISTER</p>

                <input
        className="in3"
        type = "text"
        id = "register"
        name ="register"
        required = "8"
        maxlenght = "15"
        size = "30"
        placeholder='Username'  />   
        
        <input
        className="in1"
        type = "text"
        id = "name"
        name ="name"
        required = "4"
        maxlenght = "8"
        size = "30"
        placeholder='Email'  />    

        <input
        className="in2"
        type = "text"
        id = "password"
        name ="password"
        required = "8"
        maxlenght = "15"
        size = "30"
        placeholder='Password'  />

        <input
        onChange={handleClick}
    type="date"
    id="start"
    value={date}
    name="trip-start"
    min="1900-01-01"
    max="2026-12-03" />

  


        <button className="submit">Sign up</button>
        
    </div>
  )
}
export default Auto
