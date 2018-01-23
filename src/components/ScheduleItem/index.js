import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import styles from './style.css'
import { IconEdit, IconDelete } from '../icons'

class ScheduleItem extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired,
    openPopUp: PropTypes.func.isRequired,
  }

  handleButton = (type, titlePopUp) => ev => {
    ev.preventDefault()
    const {id, title, text, date, openPopUp} = this.props

    openPopUp(type, titlePopUp, ev.currentTarget.parentElement, {id, title, text, date})
  }

  deleteButton = ev => {
    ev.preventDefault()

    this.props.deletePost(this.props.id)
  }

  render () {
    const {title, text, date} = this.props

    return (
      <div className={styles.post}>
        <div className={styles.content}>
          <h6 className={styles.title}>
            {title}
          </h6>
          <p className={styles.text}>
            {text}
          </p>
        </div>
        <time className={styles.time}>
          {moment(date).format('lll')}
        </time>
        <button onClick={this.handleButton('edit', 'Edit note')} className={`${styles.button} ${styles.editButton}`} type="button">
          <IconEdit width={13} height={13} fill="#7d43cf" />
        </button>
        <button onClick={this.deleteButton} className={`${styles.button} ${styles.deleteButton}`} type="button">
          <IconDelete width={15} height={15} fill="#7d43cf" />
        </button>
        <button onClick={this.handleButton('open', `${title}`)} className={styles.openButton} type="button" />
      </div>
    )
  }
}

export default ScheduleItem
