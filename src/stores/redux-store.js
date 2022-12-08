import { combineReducers, createStore } from 'redux'
import headerReducer from './reducers/header-reducer';


const reducers = combineReducers({
  header: headerReducer,
});


const store = createStore(reducers);


window.store = store;

export default store;