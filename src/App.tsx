import React, { useState } from 'react';
import './App.css';
import { CreatePost } from './components/post/CreatePost';
import { PostList } from './components/post/PostList';
import { PostEntity } from './types/post';
import { UserBar } from './components/user/UserBar';

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

export const App = () => {
  const [user, setUser] = useState('');
  const [posts, setPosts] = useState(defaultPost)

  return (
    <div className="App">
      <UserBar user={user} setUser={setUser} />
      <br />
      {user && <CreatePost user={user} posts={posts} setPosts={setPosts} />}
      <br />
      <hr />
      <PostList posts={posts} />
    </div>
  );
};
