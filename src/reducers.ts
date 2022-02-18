import { PostAction, PostActions, UserAction, UserActions } from "./types/Action";

const userReducer = (state: any, action: UserAction) => {
  debugger
  switch (action.type) {
    case UserActions.LOGIN:
      return action.user;
    case UserActions.REGISTER:
      return action.user;
    case UserActions.LOGOUT:
      return '';
    default:
      return state;
  }
};

const postReducer = (state: any, action: PostAction) => {
  debugger
  switch (action.type) {
    case PostActions.CREATE_POST:
      const newPost = {
        title: action.post.title,
        content: action.post.content,
        author: action.post.author,
      };
      return [newPost, ...state];
    default:
      return state;
  }
};

export const appReducer = (state: any, action: any) => {
  return {
    user: userReducer(state.user, action),
    posts: postReducer(state.posts, action)
  }
}