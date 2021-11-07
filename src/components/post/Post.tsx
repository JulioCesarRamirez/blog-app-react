import React from 'react'
import { PostEntity } from '../../types/post'

export const Post = ({title, content, author}: PostEntity) => {

  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <br/>
      <i>
        Written By <b>{author}</b>
      </i>
    </div>
  )
}
