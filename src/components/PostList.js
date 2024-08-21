import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Post from './Post';

const PostList = () => {
  const posts = useSelector(state => state.posts.posts);

  return (
    <div className="Post List">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h1>Blog Posts</h1>
        <Link to="/add" className="btn btn-primary">Add Post</Link>
      </div>
      {posts.length > 0 ? (
        posts.map(post => (
          <Post key={post.id} post={post} />
        ))
      ) : (
        <p>No posts available. Add a new post to get started!</p>
      )}
    </div>
  );
};

export default PostList;
