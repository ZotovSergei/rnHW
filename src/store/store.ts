import {createStore, combineReducers, applyMiddleware} from 'redux';
import tokenReducer from './tokenReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  tokenReducer,
});

const store = () => createStore(rootReducer, applyMiddleware(thunk));

export default store;
