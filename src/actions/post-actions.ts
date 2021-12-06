import { PostActions, PostAction } from "../types/Action";

export const CREATE_POST: PostAction = {
  type: PostActions.CREATE_POST,
  post: {
    title: 'React Hooks',
    content: ' The greatest thing since sliced bread!',
    author: 'Julio Cesar'
  }
}