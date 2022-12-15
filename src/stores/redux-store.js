import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import headerReducer from './reducers/header-reducer';
import roomReducer from './reducers/room-reducer';


const reducers = combineReducers({
  header: headerReducer,
  room: roomReducer
});


// Подключение расширения Redux DevTools в Google Chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware()));


window.store = store;

export default store;