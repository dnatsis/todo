import {
  TODO_COMPLETED_CREATE_FAIL,
  TODO_COMPLETED_CREATE_REQUEST,
  TODO_COMPLETED_CREATE_SUCCESS,
  TODO_COMPLETE_FAIL,
  TODO_COMPLETE_REQUEST,
  TODO_COMPLETE_SUCCESS,
  TODO_CREATE_FAIL,
  TODO_CREATE_REQUEST,
  TODO_CREATE_SUCCESS,
  TODO_DELETE_COMPLETED_FAIL,
  TODO_DELETE_COMPLETED_REQUEST,
  TODO_DELETE_COMPLETED_SUCCESS,
  TODO_DELETE_FAIL,
  TODO_DELETE_REQUEST,
  TODO_DELETE_SUCCESS,
  TODO_DETAILS_FAIL,
  TODO_DETAILS_REQUEST,
  TODO_DETAILS_SUCCESS,
  TODO_LIST_COMPLETED_FAIL,
  TODO_LIST_COMPLETED_REQUEST,
  TODO_LIST_COMPLETED_SUCCESS,
  TODO_LIST_FAIL,
  TODO_LIST_REQUEST,
  TODO_LIST_SUCCESS,
  TODO_UPDATE_FAIL,
  TODO_UPDATE_REQUEST,
  TODO_UPDATE_SUCCESS,
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

export const updateTodo = (id, todo) => async (dispatch) => {
  try {
    dispatch({ type: TODO_UPDATE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await axios.put(`/api/todos/${id}/edit`, todo, config);

    dispatch({
      type: TODO_UPDATE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: TODO_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createCompletedTodo = (todo) => async (dispatch) => {
  try {
    dispatch({ type: TODO_COMPLETED_CREATE_REQUEST });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(`/api/todos/completed`, todo, config);

    dispatch({
      type: TODO_COMPLETED_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TODO_COMPLETED_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteCompletedTodo = (id) => async (dispatch) => {
  try {
    dispatch({ type: TODO_DELETE_COMPLETED_REQUEST });

    await axios.delete(`/api/todos/completed/${id}`);

    dispatch({
      type: TODO_DELETE_COMPLETED_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: TODO_DELETE_COMPLETED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listCompletedTodos = () => async (dispatch) => {
  try {
    dispatch({ type: TODO_LIST_COMPLETED_REQUEST });

    const { data } = await axios.get('/api/todos/completed');

    dispatch({
      type: TODO_LIST_COMPLETED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TODO_LIST_COMPLETED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
