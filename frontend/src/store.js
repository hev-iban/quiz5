import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { userLoginReducer } from './reducers/userReducers';

const rootReducer = combineReducers({
    userLogin: userLoginReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
