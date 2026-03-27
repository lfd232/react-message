import React, { useState } from 'react'
import styles from "./Auto.module.css"


 const Auto = () => {
  const [date, setDate]=useState("2026-03-12")
  const handleClick=(event)=>{
    setDate(event.target.value)
    console.log(date)
  }
  return (
    <div className={styles.form}>
        <h1>REGISTER</h1>

                <input
        className={styles.in1}
        type = "text"
        id = "register"
        name ="register"
        required = "8"
        maxlenght = "15"
        size = "30"
        placeholder='Username'  />   
        
        <input
        className={styles.in1}
        type = "text"
        id = "name"
        name ="name"
        required = "4"
        maxlenght = "8"
        size = "30"
        placeholder='Email'  />    

        <input
        className= {styles.in1}
        type = "text"
        id = "password"
        name ="password"
        required = "8"
        maxlenght = "15"
        size = "30"
        placeholder='Password'  />

<div className={styles.birth}>Enter your date of birth</div>
        <input
        onChange={handleClick}
        className={styles.indate}
    type="date"
    id="start"
    value={date}
    name="trip-start"
    min="1900-01-01"
    max="2026-12-03" />

    
  


        <button className={styles.submit}>Sign up</button>
        
    </div>
  )
}
export default Auto
