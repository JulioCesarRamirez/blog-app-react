import React from 'react';
import { User } from '../../types/user';
import { Login } from './Login';
import { Logout } from './Logout';
import { Register } from './Register';

export const UserBar = ({ user, setUser }: User) => {
  return user ? (
    <Logout user={user} setUser={setUser} />
  ) : (
    <>
      <Login setUser={setUser} />
      <Register setUser={setUser} />
    </>
  );
};
