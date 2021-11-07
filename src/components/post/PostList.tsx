import React from 'react';
import { Post } from './Post';
import { PostEntity } from '../../types/post';

export const PostList = ({ posts }: { posts: PostEntity[] }) => {
  return (
    <div>
      {posts.map((post: PostEntity, i: number) => (
        <React.Fragment key={'post-' + i}>
          <Post {...post} />
          <hr />
        </React.Fragment>
      ))}
    </div>
  );
};
