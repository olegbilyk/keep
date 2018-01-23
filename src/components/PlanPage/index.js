import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './style.css'
import TotalStats from '../TotalStats/index'
import Schedule from '../Schedule/index'

class PlanPage extends Component {
  static propTypes = {
    // From connect
    posts: PropTypes.array.isRequired
  }

  render () {
    return (
      <div className={styles.PlanPage}>
        <div className={styles.Table}>
          <div className={styles.topBar}>
            <h2 className={styles.tableTitle}>Notes List</h2>
            <TotalStats notes={`${this.props.posts.length}`} />
          </div>
          <Schedule posts={this.props.posts} />
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  posts: state.posts
}))(PlanPage)
