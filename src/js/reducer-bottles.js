import {combineReducers} from 'redux'

import * as C from './constants';

const bottle = (state, action) => {
  switch(action.type) {
    case C.ADD_BOTTLE:
      return {
        id     : action.id,
        name   : action.name,
        colour : action.colour,
        detail : action.detail
      }
    default:
      return state;
  }
}


const bottles = (state = [], action) => {
  switch(action.type) {
    case C.ADD_BOTTLE :
      return [
        ...state,
        bottle(undefined, action)
      ];
    default:
      return state;
  }
};

const visibilityFilter = (state = C.SHOW_ALL, action) => {
  switch (action.type) {
    case C.SET_VISIBILITY_FILTER :
      return action.filter;
    default:
      return state
  }
}

const uimode = (state = C.LIST, action) => {
  switch (action.type) {
    case C.SET_UI_MODE :
      return action.mode;
    default:
      return state
  }
}

const detail = (state = null, action) => {
  switch (action.type) {
    case C.SHOW_DETAIL :
      return action.id 
    default:
      return state
  }
}

export const cellar = combineReducers({
  bottles,
  visibilityFilter,
  uimode, 
  detail
})