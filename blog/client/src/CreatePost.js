import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title,
    });
    setTitle('');
    console.dir(e);
  };
  return (
    <div
      className='container card'
      style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
    >
      <h5>Create new post</h5>
      <form onSubmit={onSubmit} className='row'>
        <div className='input-field '>
          {/* <i className='material-icons prefix'>textsms</i> */}
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type='text'
            //placeholder='Placeholder'
            id='autocomplete-input'
            className='autocomplete validate'
          />
          <label className='active' htmlFor='autocomplete-input'>
            New post
          </label>
          <button className='btn-small purple'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
