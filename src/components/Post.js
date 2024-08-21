import React from 'react';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../redux/postsSlice';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const dispatch = useDispatch();

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text truncated-text">{post.content}</p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-primary" onClick={() => dispatch(likePost(post.id))}>
            Like ({post.likes})
          </button>
          <div>
            <Link to={`/posts/${post.id}`} className="btn btn-outline-secondary mr-2">View</Link>
            <Link to={`/edit/${post.id}`} className="btn btn-outline-warning mr-2">Edit</Link>
            <button className="btn btn-outline-danger" onClick={() => dispatch(deletePost(post.id))}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;

