"use client"

import React from 'react';
import styles from './Login.module.css';
import { LoginUser } from '../../lib/auth';
import { useRouter } from 'next/navigation';
function Login() {
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();

    const { username, password } = e.target.elements;
    LoginUser(username.value, password.value);
    router.push("/");
  }
  return (
    <div className={styles.login}>
      <div className={styles.logo}>Shopit</div>
      <form className={styles.form} method="post" onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <label className={styles.label}>Username:</label>
          <input
            className={styles.input}
            type={'text'}
            placeholder="Username"
            id="username"
          />
        </div>
        <div className={styles.inputs}>
          <label className={styles.label}>Password:</label>
          <input
            className={styles.input}
            type={'password'}
            placeholder="Password"
            id="password"
          />
        </div>
        <div className={styles.btns}>
          <button type="submit" className={styles.fgt}>
            Forgot password ?
          </button>
          <button type="submit" className={styles.lgn}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;