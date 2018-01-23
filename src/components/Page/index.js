import React from 'react'
import PopUp from '../PopUp/index'
import PlanPage from '../PlanPage/index'
import styles from './style.css'

function Page (props) {
  return (
    <section className={styles.Page}>
      <PopUp className={styles.PopUp} />
      <div className={styles.pageContent}>
        <PlanPage />
      </div>
    </section>
  )
}

export default Page
