import {
  ALL_TODO_COMPLETE,
  CHANGE_TODO_STATUS,
  INSERT_TODO,
  SETTING_SEARCH_KEY,
} from './types';

const fakeAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

export const insertToDoThunk = payload => {
  return async dispatch => {
    await fakeAsync();
    dispatch(insertToDoAction(payload));
  };
};

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

export const settingSearchKeyAction = payload => {
  return {
    type: SETTING_SEARCH_KEY,
    payload,
  };
};
