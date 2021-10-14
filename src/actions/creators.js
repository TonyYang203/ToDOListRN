import {ALL_TODO_COMPLETE, CHANGE_TODO_STATUS, INSERT_TODO} from './types';

export const insertToDoAction = payload => {
  return {
    type: INSERT_TODO,
    payload,
  };
};

export const changeToDoStatusAction = id => {
  return {
    type: CHANGE_TODO_STATUS,
    payload: {
      id,
    },
  };
};

export const completeAllAction = () => {
  return {
    type: ALL_TODO_COMPLETE,
  };
};
