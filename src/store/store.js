// import { combineReducers, compose, legacy_createStore as createStore } from 'redux'

// import { toyReducer } from './reducers/toy.reducer.js'
// import { userReducer } from './reducers/user.reducer.js'

// const rootReducer = combineReducers({
//     toyModule: toyReducer,
//     userModule: userReducer,
// })

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// export const store = createStore(rootReducer, composeEnhancers())

// window.gStore = store



import { createStore, compose, combineReducers } from 'redux'
import { toyReducer } from './reducers/toy.reducer'

const mainReducer = combineReducers({
    toyModule: toyReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(mainReducer, composeEnhancers())
