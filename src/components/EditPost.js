import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editPost } from '../redux/postsSlice';

const EditPost = () => {
  const { id } = useParams();
  const post = useSelector(state => state.posts.posts.find(post => post.id === parseInt(id)));
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editPost({ id: post.id, title, content, likes: post.likes }));
    navigate(`/posts/${id}`);
  };

  return (
    <div className="Edit Post">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h1>Edit Post</h1>
        <button className="btn btn-secondary" onClick={() => navigate(-1)}>Return</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            className="form-control large-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Save Changes</button>
      </form>
    </div>
  );
};

export default EditPost;

