import React, { Component } from 'react'
import { connect } from 'dva'


import styles from './Users.css'

class Users extends Component {
  render() {
    return (
      <div className={styles.normal}>
        Users.js
      </div>
    )
  }
}

Users.propsTypes = {}

export default connect()(Users)
