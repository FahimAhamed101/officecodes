"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import { SignupUser } from '../../lib/auth'; // Ensure this function is properly implemented
import styles from './Register.module.css';

function Register() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Access form inputs
    const { username, email, password } = e.target.elements;

    // Call the SignupUser function
    try {
      await SignupUser(username.value, email.value, password.value);
      // Redirect to login page or dashboard after successful registration
      router.push('/login'); // or '/dashboard'
    } catch (error) {
      console.error('Registration failed:', error);
      alert('Registration failed. Please try again.'); // Handle error appropriately
    }
  };

  const handleLoginRedirect = () => {
    router.push('/login'); // Redirect to the login page
  };

  return (
    <div className={styles.register}>
      <div className={styles.fomitems}>
        <div className={styles.logo}>Shopit</div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputs}>
            <label className={styles.label}>Email:</label>
            <input
              className={styles.input}
              type="email"
              placeholder="Email"
              id="email"
              required
            />
          </div>
          <div className={styles.inputs}>
            <label className={styles.label}>Username:</label>
            <input
              className={styles.input}
              type="text"
              placeholder="Username"
              id="username"
              required
            />
          </div>
          <div className={styles.inputs}>
            <label className={styles.label}>Password:</label>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              id="password"
              required
            />
          </div>
          <div className={styles.btns}>
            <button
              type="button" // Not a submit button
              className={styles.fgt}
              onClick={handleLoginRedirect}
            >
              Have an account?
            </button>
            <button type="submit" className={styles.lgn}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;