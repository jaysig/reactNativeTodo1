import { combineReducers } from 'redux';

export const ADD_POST = 'ADD_POST';
const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POSTS_COMPLETE = 'FETCH_POSTS_COMPLETE';

export const reddit = (state = [
  { name: 'demo' },
  { name: 'hello' },
], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return state;
    case FETCH_POSTS_COMPLETE:
      return action.payload;
    case ADD_POST:
      return [
        action.payload,
        ...state,
      ];
    default:
      return state;
  }
};

export const reducer = combineReducers({ reddit });
