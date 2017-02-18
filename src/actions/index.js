import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER } from './types';

const ROOT_URL = 'http://localhost:8000';


// redux thunk allows us to return a FUNCTION rather than an OBJECT

export function signinUser({email, password}){
  // submit email/password to the server
  //
  // if request is good...
  // update starte to indicate user is authenticated
  // saved JWT token
  // redirect to the route '/feature'
  //
  // if request is bad...
  // show an error to the user
  return function(dispatch){
    axios.post(`${ROOT_URL}/api/signin`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        browserHistory.push('/feature');
      })
      .catch(() => {

      })
  }


}
