import { CHANGE_PROVIDER, CONNECT_TO_PROVIDER } from '../actions/mvp.actions';
const __INITIAL_MVP_STATE = {
 selectedProvider: undefined
};

export default function mvpReducer(state = __INITIAL_MVP_STATE, action) {
 switch (action.type) {
  case CHANGE_PROVIDER:
     return { ...state, selectedProvider: action.payload, connectProvider: undefined };
  case CONNECT_TO_PROVIDER:
    return { ...state, connectProvider: action.payload }; 
  default:
   return state;
 }
}
