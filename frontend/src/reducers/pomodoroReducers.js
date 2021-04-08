import {
  POMODORO_BREAK_TIMER_SET_FAIL,
  POMODORO_BREAK_TIMER_SET_REQUEST,
  POMODORO_BREAK_TIMER_SET_SUCCESS,
  POMODORO_SESSION_TIMER_SET_FAIL,
  POMODORO_SESSION_TIMER_SET_REQUEST,
  POMODORO_SESSION_TIMER_SET_SUCCESS,
} from '../constants/pomodoroConstants';

export const pomodoroBreakTimeReducer = (state = { breakTimer: 0 }, action) => {
  switch (action.type) {
    case POMODORO_BREAK_TIMER_SET_REQUEST:
      return { loading: true, breakTimer: 0 };
    case POMODORO_BREAK_TIMER_SET_SUCCESS:
      return { loading: false, breakTimer: action.payload };
    case POMODORO_BREAK_TIMER_SET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const pomodoroSessionTimeReducer = (
  state = { sessionTimer: 0 },
  action
) => {
  switch (action.type) {
    case POMODORO_SESSION_TIMER_SET_REQUEST:
      return { loading: true, sessionTimer: 0 };
    case POMODORO_SESSION_TIMER_SET_SUCCESS:
      return { loading: false, sessionTimer: action.payload };
    case POMODORO_SESSION_TIMER_SET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
