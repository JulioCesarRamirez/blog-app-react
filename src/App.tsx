import React, { useReducer } from 'react';
import './App.css';
import { CreatePost } from './components/post/CreatePost';
import { PostList } from './components/post/PostList';
import { UserBar } from './components/user/UserBar';
import { appReducer } from './reducers';

const defaultPosts = [
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

export const App = () => {
  const [state, dispatch] = useReducer(appReducer, {
    user: '',
    posts: defaultPosts,
  });
  const { user, posts } = state;
  return (
    <div className="App">
      <UserBar user={user} dispatch={dispatch} />
      <br />
      {user && <CreatePost user={user} posts={posts} dispatch={dispatch} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
};
