const FETCH_POSTS = 'FETCH_POSTS';
const FETCH_POSTS_COMPLETE = 'FETCH_POSTS_COMPLETE';
import { combineReducers } from 'redux'

export const reddit = (state = [
  {name: 'demo'},
  {name: 'hello'}
], action) => {
  return state;
  switch (action.type) {
    case FETCH_POSTS:
      return state;
    case FETCH_POSTS_COMPLETE:
      return action.payload;
    default:
      return state;

  }
};

export const reducer = combineReducers({reddit})