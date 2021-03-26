import {
  TODO_DETAILS_FAIL,
  TODO_DETAILS_REQUEST,
  TODO_DETAILS_SUCCESS,
  TODO_LIST_FAIL,
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
} from '../constants/todoConstants';

export const todoListReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case TODO_LIST_REQUEST:
      return { loading: true, todos: [] };
    case TODO_LIST_SUCCESS:
      return { loading: false, todos: action.payload };
    case TODO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const todoDetailsReducer = (state = { todo: [] }, action) => {
  switch (action.type) {
    case TODO_DETAILS_REQUEST:
      return { loading: true, todo: [] };
    case TODO_DETAILS_SUCCESS:
      return { loading: false, todo: action.payload };
    case TODO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
