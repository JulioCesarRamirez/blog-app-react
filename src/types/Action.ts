import { PostEntity } from "./post";

export interface UserAction {
  type: string;
  user: string;
}

export interface PostAction {
  type: string,
  post: PostEntity
}

export enum UserActions {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  REGISTER = 'REGISTER'
}

export enum PostActions {
  CREATE_POST = 'CREATE_POST',
}