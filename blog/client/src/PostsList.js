import React, { useState, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Comments from './Comments';
import CreateComment from './CreateComment';

import axios from 'axios';

const PostsList = () => {
  const [posts, setPosts] = useState({});
  const getPosts = async () => {
    try {
      const res = await axios.get('http://localhost:4000/posts');
      setPosts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <ErrorBoundary>
      <div className=''>
        <h4>Posts list</h4>
        <div>
          {Object.values(posts).map((post) => (
            <div className='' key={post.id}>
              <h5>{post.title}</h5>
              <CreateComment postId={post.id} />
              <Comments postId={post.id} />
            </div>
          ))}
        </div>
        {/* <pre className='card '>{JSON.stringify(posts, null, 2)}</pre> */}
        {/* <button className='btn' onClick={getPosts}>
          Get users
        </button> */}
      </div>
    </ErrorBoundary>
  );
};

export default PostsList;
