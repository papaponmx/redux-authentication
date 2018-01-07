import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  AUTH_ERROR,
  UNAUTH_USER,
  FETCH_MESSAGE,
} from './types';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to server
    axios.post(`${ROOT_URL}/signin`, { email, password })
    .then( response => {
      // If request is good...
      // -Update state to indicate user is authenticated
      dispatch({ type: AUTH_USER});
      // - Save the JWT token
      localStorage.setItem('token', response.data.token);
      // -redirect to the route '/feature'
      browserHistory.push('/feature');
    })
    .catch(() => {
      // If request is bad..
      // -Show an error to the user
      dispatch(authError('Bad login info'));
    });

  }
};

export const authError = (error) => ({
  type: AUTH_ERROR,
  payload: error
});


export const signoutUser = (action) => {
  localStorage.removeItem('token');
  return ({
    type: UNAUTH_USER,
  });
};


export const signupUser = (theRequestData) => {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, theRequestData)
    .then((response) => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/feature');
    })
    .catch((response) => dispatch(authError('Something went wrong during Sing up :('))
  );
}
};


export const fetchMessage = () => {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token')
    }
  })
  .then((res) => {
    console.log(res.data.message)
    return dispatch({
      type: FETCH_MESSAGE,
      res,
    });
  })
}


};
