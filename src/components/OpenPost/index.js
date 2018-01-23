import React from 'react'
import moment from 'moment/moment'
import styles from './style.css'

function OpenPost (props) {
  const {time, text} = props

  return (
    <div className={styles.OpenPost}>
      <time className={styles.time}>{moment(time).format('lll')}</time>
      <p className={styles.text}>{text}</p>
    </div>
  )
}

export default OpenPost