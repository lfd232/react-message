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
