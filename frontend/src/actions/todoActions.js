import {
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
