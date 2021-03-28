import {
  TODO_COMPLETE_FAIL,
  TODO_COMPLETE_REQUEST,
  TODO_COMPLETE_SUCCESS,
  TODO_CREATE_FAIL,
  TODO_CREATE_REQUEST,
  TODO_CREATE_SUCCESS,
  TODO_DELETE_FAIL,
  TODO_DELETE_REQUEST,
  TODO_DELETE_SUCCESS,
  TODO_DETAILS_FAIL,
  TODO_DETAILS_REQUEST,
  TODO_DETAILS_SUCCESS,
  TODO_LIST_FAIL,
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
} from '../constants/todoConstants';
import axios from 'axios';

export const listTodos = () => async (dispatch) => {
  try {
    dispatch({ type: TODO_LIST_REQUEST });

    const { data } = await axios.get('/api/todos');

    dispatch({
      type: TODO_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TODO_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listTodoDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: TODO_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/todos/${id}`);

    dispatch({
      type: TODO_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TODO_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createTodo = (todo) => async (dispatch) => {
  try {
    dispatch({ type: TODO_CREATE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`/api/todos`, todo, config);

    dispatch({
      type: TODO_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TODO_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    dispatch({ type: TODO_DELETE_REQUEST });

    await axios.delete(`/api/todos/${id}`);

    dispatch({
      type: TODO_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: TODO_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const completeTodo = (id) => async (dispatch) => {
  try {
    dispatch({ type: TODO_COMPLETE_REQUEST });

    await axios.put(`/api/todos/${id}`);

    dispatch({
      type: TODO_COMPLETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: TODO_COMPLETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
