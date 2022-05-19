import React, {useState} from 'react';
import styles from './Form.module.css';


export default function  Form() {
  const [input, setInput] = React.useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  
  const handleInputChange = function(e) {
    const newInput = {...input, [e.target.name]:e.target.value }
    setInput(newInput);
    setErrors(validate(newInput));
  }
  return (
      <form className = {styles.forma}>
    
      <label htmlFor='username'>Username:</label>
      <input type="text" name="username" 
        value = {input.username} 
        onChange = {handleInputChange}
        className = {errors.username ? 'danger': ''}/>
        {errors.username && <span className = 'danger'>{errors.username}</span>}

      <label htmlFor= 'password'>Password:</label>
      <input type="password" name="password" 
        value = {input.password} 
        onChange = {handleInputChange}
        className = {errors.password ? 'danger': ''}/>
        {errors.password && <span className = 'danger'>{errors.password}</span>}

      <button type ='submit'>Submit</button>
  </form>
  
  )
}
export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  if (!input.password) {
    errors.password = 'Password is required';
  } else if ((!/(?=.*[0-9])/.test(input.password))) {
    errors.password = 'Password is invalid';
  }
  return errors;
};