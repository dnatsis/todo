import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  todoListReducer,
  todoDetailsReducer,
  todoCreateReducer,
  todoDeleteReducer,
} from './reducers/todoReducers';

const reducer = combineReducers({
  todoList: todoListReducer,
  todoDetails: todoDetailsReducer,
  todoCreate: todoCreateReducer,
  todoDelete: todoDeleteReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
