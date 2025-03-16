"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';import { setCookie } from 'cookies-next';
const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };
export function LoginUser(identifier, password) {
  axios
    .post('http://localhost:1337/api/auth/local', {
      identifier: identifier,
      password: password,
    })
    .then((response) => {
      console.log('well done');
      console.log('user profile', response.data.user);
      console.log('user token', response.data.jwt);

      useRouter.push('/');
      setCookie('jwt', response.data.jwt);
      localStorage.setItem('token', data.login.jwt);
    })
    .catch((err) => {
      console.log('An error has occured', err.response);
    });
}

export function SignupUser(username, email, password) {
  axios
    .post('http://localhost:1337/api/auth/local/register', {
      username: username,
      email: email,
      password: password,
    })
    .then((response) => {
      console.log('well done');
      console.log('user profile', response.data.user);
      console.log('user token', response.data.jwt);
      Router.push('/');
      setCookie('jwt', response.data.jwt);
    })
    .catch((err) => {
      console.log('An error has occured', err.response);
    });
}

export function ForgotPassword() {
  axios
    .post('http://localhost:1337/api/auth/forgot-password', {
      email: 'user@strapi.io', // user's email
    })
    .then((response) => {
      console.log('Your user received an email');
    })
    .catch((error) => {
      console.log('An error occurred:', error.response);
    });
}