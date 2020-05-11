import React, { useState } from 'react';
import axios from 'axios';

import cPostStyle from './CreatePost.module.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      alert('Публикация должна содержать хотя бы один символ');
      return;
    }

    await axios.post('http://localhost:4000/posts', {
      title,
    });
    setTitle('');
    console.dir(e);
  };
  return (
    <div className={cPostStyle.formGroup}>
      <h5>Create new post</h5>
      <form onSubmit={onSubmit} className='row'>
        <input
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          type='text'
          //placeholder='Placeholder'
          id='autocomplete-input'
          placeholder='Type text here'
        />

        <button className=''>Add post</button>
      </form>
    </div>
  );
};

export default CreatePost;
