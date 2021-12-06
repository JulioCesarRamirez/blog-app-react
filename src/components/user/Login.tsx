import React, { Dispatch, FormEvent, useState } from 'react';
import { UserAction, UserActions } from '../../types/Action';
import { User } from '../../types/user';

export const Login = ({ dispatch }: {dispatch: Dispatch<UserAction>}) => {
  const [userName, setUserName] = useState('');

  const handleUsername = (value: string) => {
    setUserName(value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch({ type: UserActions.LOGIN, user: userName });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        name="login-username"
        id="login-username"
        onChange={({ target: { value } }) => handleUsername(value)}
        value={userName}
      />
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      <input type="submit" value="Login" disabled={userName.length === 0} />
    </form>
  );
};
