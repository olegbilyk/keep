import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { IconCheck, IconClose } from '../icons'
import styles from './style.css'
import CreatePost from '../CreatePost/index'
import { addPost, editPost, closedPopUp } from '../../AC/index'
import OpenPost from '../OpenPost'

class PopUp extends Component {
  static propTypes = {
    className: PropTypes.string,
    // From connect
    popUpState: PropTypes.object.isRequired,
    closedPopUp: PropTypes.func.isRequired
  }

  state = {
    stylePlaceholder: {},
    classPlaceholder: ''
  }

  closePopUp = ev => {
    ev.preventDefault()

    this.props.closedPopUp()
  }

  getIsOpen = (isOpen) => {
    if (isOpen) return styles.open

    return styles.close
  }

  getIsDone = (isDone) => {
    if (isDone) return styles.successful

    return styles.rejected
  }

  loadPlaceholder (item, isOpen) {
    if (item && isOpen) {
      this.setState({
        stylePlaceholder: {
          WebkitTransform: `translate3d(${item.offsetLeft}px, ${item.offsetTop}px, 0px) scale3d(${item.offsetWidth / document.body.offsetWidth},${item.offsetHeight / document.body.offsetHeight}, 1)`,
          transform: `translate3d(${item.offsetLeft}px, ${item.offsetTop}px, 0px) scale3d(${item.offsetWidth / document.body.offsetWidth},${item.offsetHeight / document.body.offsetHeight}, 1)`,
        }
      })

      setTimeout(() => {
        this.setState({
          classPlaceholder: styles.placeholderIn,
          stylePlaceholder: {
            WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
            transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
          }
        })
      }, 100)
    }
  }

  hidePlaceholder (item, isOpen, isDone) {
    if (item && !isOpen) {
      if (isDone) {
        this.setState({
          classPlaceholder: styles.placeholderOut,
          stylePlaceholder: {
            WebkitTransform: 'translate3d(0, 0, 0) scale3d(0, 0, 1)',
            transform: 'translate3d(0, 0, 0) scale3d(0, 0, 1)'
          }
        })
      } else {
        this.setState({
          classPlaceholder: styles.placeholderOut,
          stylePlaceholder: {
            WebkitTransform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)',
            transform: 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
          }
        })
      }

      setTimeout(() => {
        this.setState({
          classPlaceholder: '',
        })
      }, 500)
    }
  }

  componentWillReceiveProps (nextProps) {
    this.loadPlaceholder(nextProps.popUpState.targetOpenPopUp, nextProps.popUpState.isOpenPopUp)
    this.hidePlaceholder(this.props.popUpState.targetOpenPopUp, nextProps.popUpState.isOpenPopUp, nextProps.popUpState.isDone)
  }

  getTypePopUp (typePopUp, editPosts) {
    const {addPost, editPost, closedPopUp} = this.props
    const {date, text} = editPosts

    switch (typePopUp) {
      case 'add':
        return <CreatePost setPost={addPost} isEditPost={false} closedPopUp={closedPopUp} />
      case 'edit':
        return <CreatePost setPost={editPost} post={editPosts} isEditPost={true} closedPopUp={closedPopUp} />
      case 'open':
        return <OpenPost time={date} text={text} />
    }
  }

  render () {
    const {popUpState, className} = this.props

    return (
      <div role="dialog" aria-label={`PopUp: ${popUpState.popUpTitle}`}
           className={`${styles.PopUp} ${this.getIsOpen(popUpState.isOpenPopUp)} ${className} ${this.getIsDone(popUpState.isDone)}`}
           data-active={popUpState.isOpenPopUp}>
        <div className={styles.popUpWrapper}>
          <div className={styles.header}>
            <h3 className={styles.title}>{popUpState.popUpTitle}</h3>
            <button onClick={this.closePopUp} className={styles.btnClose} type="button">
              <IconClose />
            </button>
          </div>
          <div className={styles.content}>
            {this.getTypePopUp(popUpState.typePopUp, popUpState.editPost)}
          </div>
        </div>
        <div className={`${styles.doneWrapper} ${this.getIsDone(popUpState.isDone)}`}>
          <IconCheck className={styles.doneIcon} width={60} height={60} fill="#373737" />
          <span className={styles.doneText}>Done</span>
        </div>
        <div className={`${styles.placeholder} ${this.state.classPlaceholder}`}
             style={this.state.stylePlaceholder} />
      </div>
    )
  }
}

export default connect((state) => ({
  popUpState: state.popUpState
}), {addPost, editPost, closedPopUp})(PopUp)