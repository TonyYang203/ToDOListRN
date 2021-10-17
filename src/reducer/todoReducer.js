import {
  ALL_TODO_COMPLETE,
  CHANGE_TODO_STATUS,
  INSERT_TODO,
  SETTING_SEARCH_KEY,
} from '../actions/types';

const initState = {
  list: [],
  searchKey: '',
};

const insertToDo = (state, item) => {
  return {
    ...state,
    list: [...state.list, item],
  };
};

const changeToDoStatus = (state, {id}) => {
  const {list} = state;
  const index = list.findIndex(item => item.id === id);

  const nowItem = list[index];

  const newStatus = nowItem.status === 'done' ? 'not done' : 'done';

  list[index] = {
    ...nowItem,
    status: newStatus,
  };

  return {
    ...state,
    list: [...list],
  };
};

const allToDoComplete = state => {
  return {
    ...state,
    list: state.list.map(item => {
      return {
        ...item,
        status: 'done',
      };
    }),
  };
};

export default function todoReducer(state = initState, {type, payload}) {
  switch (type) {
    case INSERT_TODO:
      return insertToDo(state, payload);
    case CHANGE_TODO_STATUS:
      return changeToDoStatus(state, payload);
    case ALL_TODO_COMPLETE:
      return allToDoComplete(state);
    case SETTING_SEARCH_KEY:
      return {...state, searchKey: payload.searchKey};
    default:
      return state;
  }
}
