import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: []
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    editPost: (state, action) => {
      const index = state.posts.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.posts[index] = action.payload;
      }
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload);
    },
    likePost: (state, action) => {
      const post = state.posts.find(post => post.id === action.payload);
      if (post) {
        post.likes += 1;
      }
    }
  }
});

export const { addPost, editPost, deletePost, likePost } = postsSlice.actions;
export default postsSlice.reducer;
