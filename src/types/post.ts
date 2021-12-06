import { Dispatch } from "react";
import { PostAction } from "./Action";
import { User } from "./user";

export interface PostEntity {
  title: string;
  content: string;
  author: string;
}

export interface CreatePostEntity {
  posts: PostEntity[];
  dispatch: Dispatch<PostAction>;
  user: string;
}