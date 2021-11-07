import React, { FormEvent, useState } from 'react';
import { User } from '../../types/user';

export const Login = ({ setUser }: User) => {
  const [username, setUsername] = useState('');

  const handleUsername = (value: string) => {
    setUsername(value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setUser(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="login-username">Username:</label>
      <input
        type="text"
        name="login-username"
        id="login-username"
        onChange={({ target: { value } }) => handleUsername(value)}
        value={username}
      />
      <label htmlFor="login-password">Password:</label>
      <input type="password" name="login-password" id="login-password" />
      <input type="submit" value="Login" disabled={username.length === 0} />
    </form>
  );
};
