<<<<<<< HEAD
import styles from './Home.module.css'
const Home = () => {
    return (
        <div className={styles.block}>
        <p> ДОБРО ПОЖАЛОВАТЬ В НАШ МАГАЗИН ПЕРЧАТОК </p>

        </div>

        
       
        ); 
      
    }; 
    export default Home
=======
import React from 'react'
import Sidebar from '../components/Sidebar'
import styles from "./home.module.css"
import {Workspace} from "../components/workspace"
export const Home = () => {
  return (
    
    <div className={styles.page}> 
        <Sidebar/>
        <Workspace/>
    </div>
    
    
    
  )
}
>>>>>>> 0c91d9e1bec2c61f7ebe54ad418d952ff03c0a9d
