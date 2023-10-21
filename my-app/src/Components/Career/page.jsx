import React from 'react'
import styles from './page.module.css'
import Patner from '../PatnerUs/page'
import Link from 'next/link'

const page = () => {
  return (
    <div className={styles.main}>
      <p className={styles.label}>Career</p>
      <div>
        <p className={styles.text}>Are you passionate about the real estate industry? Do you have what it takes to succeed in the enriching world of Jaswill Properties Limited, send your qualification/CV to info@jaswillproperties.com</p>
        <div className={styles.buttoncont}>
          <Link href={`/career`}>
        <button className={styles.button}>Join Us</button>
        </Link> 
        </div>
      </div>
    </div>
  )
}

export default page