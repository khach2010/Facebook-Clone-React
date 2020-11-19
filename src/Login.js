import React from 'react';
import { auth, provider } from './firebase';
import { Button } from '@material-ui/core';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import './Login.css';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user
        });
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img src='https://i.pinimg.com/originals/b3/26/b5/b326b5f8d23cd1e0f18df4c9265416f7.png' />
        <img src='https://www.spieringsoptiek.nl/wp-content/uploads/2015/12/Facebook-Logo-PNG-Clipart.png' />
      </div>

      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
