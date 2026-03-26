import React from 'react'
import styles from './workspace.module.css'
export const Workspace = () => {
  return (
    <div className={styles.workspace}>
      <div className={styles.highbar}>
        <div className={styles.arrow}></div>
        <div className={styles.companionmain}>
        <div className={styles.companion}></div>
        <div className={styles.companionname}>Firstname Lastname</div>
        </div>
      </div>
      
    </div>

  )
}
