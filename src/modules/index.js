import { combineReducers } from 'redux'
import counter from './counter'
import svgRender from './svgRender'

export default combineReducers({
  counter, svgRender
})
