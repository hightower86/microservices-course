import React from 'react';

import PostsLists from './PostsList';
import CreatePost from './CreatePost';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

import appStyle from './App.module.css';

const App = () => {
  return (
    <ErrorBoundary>
      <div className={appStyle.container}>
        <h1>Blog App</h1>
        <CreatePost />
        <PostsLists />
      </div>
    </ErrorBoundary>
  );
};

export default App;
