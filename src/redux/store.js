import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk }from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import authReducer from '../redux/reducers/authReducer';
import eventReducer from '../redux/reducers/eventReducer';
import settingsReducer from '../redux/reducers/settingsReducer'; 

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventReducer,
  settings: settingsReducer,

});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;