import {
  AUTH_ERROR,
  AUTH_USER,
  UNAUTH_USER,
} from '../actions/types';

export default (state = { }, action) => {
  switch (action.type) {

    case AUTH_USER:
    return { ...state,
      authenticated: true,
    }
    case UNAUTH_USER:
    return {  ...state,
      authenticated: false,
    }
    case AUTH_ERROR:
    return {
      ...state,
      error: action.payload,
    }
      break;
    default:
    return state
  }
}
