import React from 'react'
import styles from "../styles/Container.module.css";

export default function Container({children}) {
   
  return (
    <div className={styles.werper}>{children}</div>
  )
}
