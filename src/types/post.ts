import { Dispatch, SetStateAction } from "react";

export interface PostEntity {
  title: string;
  content: string;
  author: string;
}

export interface CreatePostEntity {
  posts: PostEntity[];
  setPosts: Dispatch<SetStateAction<PostEntity[]>>;
  user: string;
}