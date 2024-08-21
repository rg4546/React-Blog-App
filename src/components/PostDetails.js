import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

const PostDetails = () => {
  const { id } = useParams();
  const post = useSelector(state => state.posts.posts.find(post => post.id === parseInt(id)));
  const navigate = useNavigate();

  return (
    <div className="Post Details">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h1>{post.title}</h1>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Return</button>
      </div>
      <p>{post.content}</p>
      <p>Likes: {post.likes}</p>
    </div>
  );
};

export default PostDetails;
