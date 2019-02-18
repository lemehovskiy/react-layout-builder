import { combineReducers } from 'redux'
import svgRender from './svgRender'
import resizeTool from './resizeTool'
import layoutBuilder from './layoutBuilderReducer'

export default combineReducers({
  svgRender, resizeTool, layoutBuilder
})
