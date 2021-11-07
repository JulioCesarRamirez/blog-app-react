import React, { FormEvent } from 'react';
import { User } from '../../types/user';

export const Logout = ({ user, setUser }: User) => {

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setUser('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  );
};
