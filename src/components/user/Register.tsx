import React, { Dispatch, FormEvent, useState } from 'react';
import { UserAction, UserActions } from '../../types/Action';

export const Register = ({ dispatch }: { dispatch: Dispatch<UserAction> }) => {
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  const handleUsername = (value: string) => {
    setUsername(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handlePasswordRepeat = (value: string) => {
    setPasswordRepeat(value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch({
      type: UserActions.REGISTER,
      user: userName,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="register-username">Username:</label>
      <input
        type="text"
        name="register-username"
        id="register-username"
        onChange={({ target: { value } }) => handleUsername(value)}
        value={userName}
      />
      <label htmlFor="register-password">Password:</label>
      <input
        type="password"
        value={password}
        onChange={({ target: { value } }) => handlePassword(value)}
        name="register-password"
        id="register-password"
      />
      <label htmlFor="register-password-repeat">Repeat password:</label>
      <input
        type="password"
        value={passwordRepeat}
        onChange={({ target: { value } }) => handlePasswordRepeat(value)}
        name="register-password-repeat"
        id="register-password-repeat"
      />
      <input
        type="submit"
        value="Register"
        disabled={
          userName.length === 0 ||
          password.length === 0 ||
          password !== passwordRepeat
        }
      />
    </form>
  );
};
