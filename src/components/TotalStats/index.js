import React from 'react'
import PropTypes from 'prop-types'
import { IconLightbulb } from '../icons'
import styles from './style.css'

function TotalStats (props) {
  const {notes} = props

  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <span className={styles.iconWrapper}><IconLightbulb fill={'#fff'} width={22} height={22} /></span>
        <span className={styles.text}>{notes}</span>
      </li>
    </ul>
  )
}

TotalStats.propTypes = {
  notes: PropTypes.string.isRequired,
}

export default TotalStats
