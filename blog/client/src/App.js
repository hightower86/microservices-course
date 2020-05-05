import React from 'react';

import PostsLists from './PostsList';
import CreatePost from './CreatePost';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

const App = () => {
  return (
    <ErrorBoundary>
      <div className='container'>
        <h1>App</h1>
        <CreatePost />
        <PostsLists />
      </div>
    </ErrorBoundary>
  );
};

export default App;
