import {UPDATE_CURRENT_USER, OPEN_TOAST, UPDATE_FRIEND_LIST} from './actions'
export const manageDataReducer = function (state={id:"", friends:[]}, action) {
    switch (action.type) {
      case UPDATE_CURRENT_USER: 
        return {...state, id: action.payload};
      case UPDATE_FRIEND_LIST: 
        return {...state, friends: action.payload};
      case OPEN_TOAST: 
        return {...state, openToast: {show: true, data: action.payload}};
      default:
        return state;
    }
  };


  export const manageToast = function (state= {show:false, data:null}, action) {
    switch (action.type) {
      case OPEN_TOAST: 
        return {...state, show: true, data: action.payload};
      default:
        return state;
    }
  };