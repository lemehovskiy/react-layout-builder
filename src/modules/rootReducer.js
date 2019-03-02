import { combineReducers } from 'redux'
import svgRender from './svgRenderReducer'
import layoutBuilder from './layoutBuilderReducer'

export default combineReducers({
  svgRender, layoutBuilder
})
