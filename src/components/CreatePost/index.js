import React, { Component } from 'react'
import moment from 'moment'
import styles from './style.css'
import PropTypes from 'prop-types'

class CreatePost extends Component {
  static propTypes = {
    isEditPost: PropTypes.bool.isRequired,
    setPost: PropTypes.func.isRequired,
    closedPopUp: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    if (this.props.isEditPost) {
      this.state = {
        id: this.props.post.id,
        date: this.props.post.date,
        title: this.props.post.title,
        text: this.props.post.text
      }
    } else {
      this.state = {
        id: null,
        date: moment(),
        title: '',
        text: '',
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.post && nextProps.isEditPost) {
      this.setState({
        id: nextProps.post.id,
        date: nextProps.post.date,
        title: nextProps.post.title,
        text: nextProps.post.text
      })
    } else {
      this.setState({
        id: null,
        date: moment(),
        title: '',
        text: '',
      })
    }
  }

  handleTextareaChange = type => ev => {
    ev.preventDefault()

    this.setState({
      [type]: ev.target.value,
    })
  }

  handleSubmit = ev => {
    ev.preventDefault()

    const {title, text} = this.state
    const {isEditPost, setPost, closedPopUp} = this.props

    if (!!title && !!text) {
      if (isEditPost) {
        setPost(this.state)
      } else {
        setPost({date: moment(), title, text})
      }

      closedPopUp(true)

      this.setState({
        date: moment(),
        title: '',
        text: '',
      })
    }
  }

  hasDisabled () {
    return (!!this.state.title && !!this.state.text) ? '' : styles.btnPostDisabled
  }

  getButtonText () {
    return this.props.isEditPost ? 'Edit note' : 'Create note'
  }

  render () {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <input type="text" required
               value={this.state.title}
               className={styles.input}
               onChange={this.handleTextareaChange('title')}
               placeholder="Note's title" />
        <textarea cols="58" rows="8" required
                  value={this.state.text}
                  onChange={this.handleTextareaChange('text')}
                  className={styles.textarea}
                  placeholder="Text and links" />
        <div className={styles.buttonWrapper}>
          <button type="submit" className={`${styles.btnPost} ${this.hasDisabled()}`}>
            <span>{this.getButtonText()}</span>
          </button>
        </div>
      </form>
    )
  }
}

export default CreatePost
