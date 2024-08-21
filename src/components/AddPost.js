import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../redux/postsSlice';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPost({ id: Date.now(), title, content, likes: 0 }));
    setTitle('');
    setContent('');
    navigate('/');
  };

  return (
    <div className="Add Post">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h1>Add New Post</h1>
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
        <button type="submit" className="btn btn-primary mt-3">Add Post</button>
      </form>
    </div>
  );
};

export default AddPost;
