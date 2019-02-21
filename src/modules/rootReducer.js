import { combineReducers } from 'redux'
import svgRender from './svgRenderReducer'
import resizeTool from './resizeToolReducer'
import layoutBuilder from './layoutBuilderReducer'

export default combineReducers({
  svgRender, resizeTool, layoutBuilder
})
