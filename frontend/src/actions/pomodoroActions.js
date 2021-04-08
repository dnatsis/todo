import {
  POMODORO_BREAK_TIMER_SET_FAIL,
  POMODORO_BREAK_TIMER_SET_REQUEST,
  POMODORO_BREAK_TIMER_SET_SUCCESS,
  POMODORO_SESSION_TIMER_SET_FAIL,
  POMODORO_SESSION_TIMER_SET_REQUEST,
  POMODORO_SESSION_TIMER_SET_SUCCESS,
} from '../constants/pomodoroConstants';

export const breakTimer = (breakTimer) => async (dispatch) => {
  try {
    dispatch({ type: POMODORO_BREAK_TIMER_SET_REQUEST });

    dispatch({
      type: POMODORO_BREAK_TIMER_SET_SUCCESS,
      payload: breakTimer,
    });
  } catch (error) {
    dispatch({
      type: POMODORO_BREAK_TIMER_SET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const sessionTimer = (sessionTimer) => async (dispatch) => {
  try {
    dispatch({ type: POMODORO_SESSION_TIMER_SET_REQUEST });

    dispatch({
      type: POMODORO_SESSION_TIMER_SET_SUCCESS,
      payload: sessionTimer,
    });
  } catch (error) {
    dispatch({
      type: POMODORO_SESSION_TIMER_SET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
