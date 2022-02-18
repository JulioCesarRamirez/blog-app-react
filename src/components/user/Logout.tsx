import React, { Dispatch, FormEvent } from 'react';
import { UserAction, UserActions } from '../../types/Action';

export const Logout = ({
  user,
  dispatch,
}: {
  user: string;
  dispatch: Dispatch<UserAction>;
}) => {
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch({ type: UserActions.LOGOUT, user });
  };

  return (
    <form onSubmit={handleSubmit}>
      Logged in as: <b>{user}</b>
      <input type="submit" value="Logout" />
    </form>
  );
};
