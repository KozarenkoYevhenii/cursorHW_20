import React from "react";
import Post from "../Post/post";
import "./posts.css";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    posts: state.posts,
    authors: state.authors,
  };
};
const mapDispatch = (dispatch) => {
  return {
    addNewPost: (newPost) =>
      dispatch({
        type: "ADD_NEW_POST",
        newPost: { ...newPost },
      }),
  };
};

const months = [
  "Jan",
  "Fab",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const time = new Date();
const date = time.getDate() + " " + months[time.getMonth()] + ".";

class Posts extends React.Component {
  state = {
    postContent: "",
    postImage: "",
    authorName: this.props.authors[0].name,
    authorNickname: this.props.authors[0].nickname,
    authorImage: this.props.authors[0].image,
    postDate: date,
  };

  changeText = (e) => {
    this.setState({ postContent: e.target.value });
  };
  addImgURL = (e) => {
    this.setState({ postImage: e.target.value });
  };
  setAuthor = (e) => {
    const author = this.props.authors.filter(
      (author) => author.name === e.target.value
    )[0];
    this.setState({
      authorName: e.target.value,
      authorNickname: author.nickname,
      authorImage: author.image,
    });
  };
  addNewPost = (e) => {
    this.props.addNewPost(this.state);
    e.target.value = ""
    this.setState({ postContent: "", postImage: "" });
    
  };

  render() {
    return (
      <div className="posts-wrapper">
        <div className="new-post-wrapper">
          <label>
            Publication text:
            <input
              value={this.postContent}
              className="input-field"
              type="text"
              onChange={this.changeText}
            />
          </label>
          <label>
            Publication image (URL):
            <input
              value={this.postImage}
              className="input-field"
              type="text"
              onChange={this.addImgURL}
            />
          </label>
          <label>
            Author:
            <select
              className="input-field"
              selected={this.props.authors[0].name}
              onChange={this.setAuthor}
            >
              {this.props.authors.map((author) => (
                <option>{author.name}</option>
              ))}
            </select>
          </label>
          <button
            className="add-post-button"
            type="submit"
            onClick={this.addNewPost}
          >
            Add Post
          </button>
        </div>
        {this.props.posts.map((post) => {
          return (
            <Post
              name={post.authorName}
              photo={post.authorImage}
              nickname={post.authorNickname}
              content={post.postContent}
              image={post.postImage}
              date={post.postDate}
            />
          );
        })}
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(Posts);
