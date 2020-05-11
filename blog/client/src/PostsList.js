import React, { useState, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';
import Comments from './Comments';
import CreateComment from './CreateComment';

import style from './PostList.module.css';

import axios from 'axios';

const PostsList = () => {
  const [posts, setPosts] = useState({});

  const getPosts = async () => {
    try {
      const res = await axios.get('http://localhost:4002/posts');
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
      <div className={style.container}>
        <h3>Posts list</h3>
        <div>
          {Object.values(posts).map((post) => (
            <div className={style.post} key={post.id}>
              <h3>{post.title}</h3>
              <CreateComment postId={post.id} />
              <Comments comments={post.comments} />
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
