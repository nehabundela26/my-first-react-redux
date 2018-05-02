//import { createStore, combineReducers } from 'redux'

export default function(state={},action){
  switch(action.type){
    case 'CHANGE_NAME':{
      state ={...state,name:action.payload}
      break;
    }
    case 'CHANGE_AGE':{
      state = {...state,age:action.payload}
      break;
    }
    case 'FETCH_USER':{
        state= {...state,user:action.payload}
    }
  }
return state;
}