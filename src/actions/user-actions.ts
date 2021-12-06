import { UserAction, UserActions } from "../types/Action"

export const LOGIN: UserAction = {
  type: UserActions.LOGIN,
  user: 'Julio'
}

export const REGISTER: UserAction = {
  type: UserActions.REGISTER,
  user: 'Julio'
}

export const LOGOUT: UserAction = {
  type: UserActions.LOGOUT,
  user: ''
}