import axios from 'axios';

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
    axios.post(`${ROOT_URL}/api/signin`, { email, password });
  }


}
