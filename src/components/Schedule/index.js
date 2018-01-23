import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './style.css'
import ScheduleItem from '../ScheduleItem/index'
import { connect } from 'react-redux'
import { IconPlus } from '../icons'
import { deletePost, openPopUp } from '../../AC/index'

class Schedule extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    // From connect
    openPopUp: PropTypes.func.isRequired
  }

  setPost = ev => {
    ev.preventDefault()
    this.props.openPopUp('add', 'New note', ev.currentTarget)
  }

  render () {
    const {posts, openPopUp, deletePost} = this.props

    let elements = null

    if (Array.isArray(posts)) {
      elements = posts.sort((prev, next) => {

        if (prev.date > next.date) return true
      }).map(post => (<li className={styles.item} key={post.id}>
        <ScheduleItem
          id={post.id}
          title={post.title}
          text={post.text}
          date={post.date}
          deletePost={deletePost}
          openPopUp={openPopUp} />
      </li>))
    }

    return (
      <ul className={styles.list}>
        {elements}
        <li key={Date.now() + Math.random()} className={styles.item}>
          <button onClick={this.setPost} className={styles.button} type="button">
            <span className={styles.buttonText}>Create new note</span>
            <IconPlus className={styles.buttonIcon} width={30} height={30} />
          </button>
        </li>
      </ul>
    )
  }
}

export default connect(null, {openPopUp, deletePost})(Schedule)