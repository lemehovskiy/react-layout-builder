import {createStore, applyMiddleware, compose} from 'redux'
import {connectRouter, routerMiddleware} from 'connected-react-router'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './modules/rootReducer'

export const history = createHistory()

const initialState = {
    layoutBuilder: {
        newFigureDragData: null,
        mouseStartPosition: {
            x: null,
            y: null
        },
    },
    svgRender: {
        editMode: null,
        mousePosition: {
            x: null,
            y: null
        },

        selectedObjectsId: [],

        objectsById: ['1', '2'],
        objectsByHash: {
            '1': {
                id: '1',
                width: 163,
                height: 84,
                rotate: 0,
                strokeWidth: 3,
                stroke: 'rgba(135, 38, 86, 1)',
                fill: "rgba(0, 123, 255, 1)",
                radius: "0",
                type: "rectangle",
                x: 17,
                y: 15,
                text: "Lorem ipsum \n dolor",
                textProps: {
                    textAlign: 'center',
                    verticalAlign: 'top'

                }
            },
            '2': {
                id: '2',
                width: 200,
                height: 300,
                rotate: 0,
                stroke: "rgba(0, 255, 57, 1)",
                strokeWidth: 5,
                fill: "rgba(0, 123, 255, 1)",
                radius: "0",
                type: "rectangle",
                x: 200,
                y: 50,
                text: "Lorem ipsum \n dolor",
                textProps: {
                    textAlign: 'right',
                    verticalAlign: 'bottom'

                }
            }
        }
    }
}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

if (process.env.NODE_ENV === 'development'
) {
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
