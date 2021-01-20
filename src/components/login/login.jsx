import React from 'react';
import { useForm } from 'react-hook-form';

function Login (props) {
  const { register, handleSubmit, errors } = useForm();

  return (
    
    <form onSubmit={handleSubmit(props.onSubmit)}>

      <div className = 'login-title'>Авторизация</div>

      <div>
        <label>Имя пользователя</label>
        <input name='login' defaultValue='' ref={register({ required: true })} />
        {errors.login && 'Введите имя пользователя'}
      </div>

      <div>
        <label>Пароль</label>
        <input name='password' ref={register({ required: true })} />
        {errors.password && 'Введите пароль'}
      </div>

      <input type='submit' />
      
    </form>    
  );
}

export default Login;