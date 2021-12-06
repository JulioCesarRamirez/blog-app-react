import React, { useReducer } from 'react';
import './App.css';
import { CreatePost } from './components/post/CreatePost';
import { PostList } from './components/post/PostList';
import { PostEntity } from './types/post';
import { UserBar } from './components/user/UserBar';
import {
  UserActions,
  PostActions,
  UserAction,
  PostAction,
} from './types/Action';
import { User } from './types/user';

const defaultPost: PostEntity[] = [
  {
    title: 'React Hooks',
    content: 'The greatest thing since sliced bread!',
    author: 'Julio Cesar',
  },
  {
    title: 'Using React Fragments',
    content: 'Keeping the DOM tree clean!',
    author: 'Julio Cesar',
  },
];

const userReducer = (state: any, action: UserAction) => {
  switch (action.type) {
    case UserActions.LOGIN:
      return action.user;
    case UserActions.REGISTER:
      return action.user;
    case UserActions.LOGOUT:
      return '';
    default:
      throw new Error(`Action ${action.type} type is not supported `);
  }
};

const postReducer = (state: any, action: PostAction) => {
  switch (action.type) {
    case PostActions.CREATE_POST:
      const newPost = {
        title: action.post.title,
        content: action.post.content,
        author: action.post.author,
      };
      return [newPost, ...state];
    default:
      throw new Error(`Action ${action.type} type is not supported `);
  }
};

export const App = () => {
  const [user, dispatchUser] = useReducer(userReducer, '');
  const [posts, dispatchPosts] = useReducer(postReducer, defaultPost);
  return (
    <div className="App">
      <UserBar user={user} dispatch={dispatchUser} />
      <br />
      {user && (
        <CreatePost user={user} posts={posts} dispatch={dispatchPosts} />
      )}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
};
