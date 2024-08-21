import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ThemeProvider } from './context/ThemeContext';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import PostDetails from './components/PostDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container">
                <div className="d-flex justify-content-center w-100">
                  <Link className="navbar-brand" to="/">Blog Post App</Link>
                </div>
              </div>
            </nav>
            <div className="container mt-3">
              <Routes>
                <Route path="/" element={<PostList />} />
                <Route path="/add" element={<AddPost />} />
                <Route path="/edit/:id" element={<EditPost />} />
                <Route path="/posts/:id" element={<PostDetails />} />
                <Route path="*" element={<AddPost />} />
              </Routes>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
