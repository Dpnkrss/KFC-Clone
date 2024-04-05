import { combineReducers, createStore, applyMiddleware } from 'redux';
import { productReducer } from './reducers/productReducer';
import { thunk as thunkMiddleware } from 'redux-thunk';

import { composeWithDevTools } from '@redux-devtools/extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const rootReducer = combineReducers({
  products: productReducer,
});
export const store = createStore(rootReducer, composedEnhancer);
