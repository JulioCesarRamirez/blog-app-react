import React, { Dispatch } from 'react';
import { UserAction } from '../../types/Action';
import { User } from '../../types/user';
import { Login } from './Login';
import { Logout } from './Logout';
import { Register } from './Register';

export const UserBar = ({
  user,
  dispatch,
}: {
  user: string;
  dispatch: Dispatch<UserAction>;
}) => {
  return user ? (
    <Logout user={user} dispatch={dispatch} />
  ) : (
    <>
      <Login dispatch={dispatch} />
      <Register dispatch={dispatch} />
    </>
  );
};
