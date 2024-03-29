import React, { FormEvent, useState } from 'react';
import { PostActions } from '../../types/Action';
import { CreatePostEntity } from '../../types/post';

export const CreatePost = ({ user, posts, dispatch }: CreatePostEntity) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitle = (value: string) => {
    setTitle(value);
  };

  const handleContent = (value: string) => {
    setContent(value);
  };

  const handleCreate = () => {
    const newPost = { title, content, author: user };
    dispatch({ type: PostActions.CREATE_POST, post: newPost });
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    handleCreate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Author: <b>{user}</b> <br />
        <label htmlFor="create-title">Title: </label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          onChange={({ target: { value } }) => handleTitle(value)}
        />
      </div>
      <textarea
        value={content}
        onChange={({ target: { value } }) => handleContent(value)}
      />
      <input type="submit" value="Create" />
    </form>
  );
};
