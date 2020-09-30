import React from "react";
import "./post.css"

function Post(props) {
  return (
    <div className="postWrapper">
          <img className="authorImage" src={props.photo} alt='author' />
      <div className="authorInfo">
        <span className="authorName">{props.name}</span>
        <span className="authorNickname">{props.nickname}</span>
        <span className="date">{props.date}</span>
      </div>
      <div className="contentText">{props.content}</div>
      <img className="contentImage" src={props.image} alt='content' />
    </div>
  );
}

export default Post;