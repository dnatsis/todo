import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  todoListReducer,
  todoDetailsReducer,
  todoCreateReducer,
  todoDeleteReducer,
  todoCompleteReducer,
  todoCompletedCreateReducer,
  todoListCompletedReducer,
  todoUpdateReducer,
} from './reducers/todoReducers';

import {
  pomodoroBreakTimeReducer,
  pomodoroSessionTimeReducer,
} from './reducers/pomodoroReducers';

const reducer = combineReducers({
  todoList: todoListReducer,
  todoDetails: todoDetailsReducer,
  todoCreate: todoCreateReducer,
  todoDelete: todoDeleteReducer,
  todoCompleted: todoCompleteReducer,
  todoCompletedCreate: todoCompletedCreateReducer,
  todoListCompleted: todoListCompletedReducer,
  todoUpdate: todoUpdateReducer,
  pomodoroBreakTime: pomodoroBreakTimeReducer,
  pomodoroSessionTime: pomodoroSessionTimeReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
