import React from 'react'
import { connect } from 'react-redux'


import LayoutBuilder from '../layoutBuilder'

const Home = props => (
  <div>
      <LayoutBuilder/>
  </div>
)

export default connect(
  null,
    null
)(Home)
