import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import roomReducer from './reducers/room-reducer';


const reducers = combineReducers({
  room: roomReducer
});


// Подключение расширения Redux DevTools в Google Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));


export default store;