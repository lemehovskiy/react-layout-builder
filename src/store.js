import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules'

export const history = createHistory()

const initialState = {
  svgRender: {
      editMode: null,
      mousePosition: {
          x: null,
          y: null
      },
      mouseStartPosition: {
          x: null,
          y: null
      },

      handlerObjectIndex: null,

      objects: [
          {
              id: 1,
              width: 163,
              height: 84,
              rotate: 0,
              strokeWidth: 0,
              fill: "rgba(0, 123, 255, 1)",
              radius: "0",
              type: "rectangle",
              x: 17,
              y: 15,
              selected: false,
              text: "Lorem ipsum \n dolor",
              textProps: {
                  textAlign: 'center',
                  verticalAlign: 'top'

              }
          },
          {
              id: 2,
              width: 200,
              height: 300,
              rotate: 0,
              strokeWidth: 0,
              fill: "rgba(0, 123, 255, 1)",
              radius: "0",
              type: "rectangle",
              x: 200,
              y: 50,
              selected: false,
              text: "Lorem ipsum \n dolor",
              textProps: {
                  textAlign: 'right',
                  verticalAlign: 'bottom'

              }
          }
      ],
      editObjectInitState: null
  }
}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

export default createStore(
  connectRouter(history)(rootReducer),
  initialState,
  composedEnhancers
)
