import React, { useState } from 'react';
import axios from 'axios';

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
    <div className='' style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
      <h5>Create new post</h5>
      <form onSubmit={onSubmit} className='row'>
        <div className=' '>
          {/* <i className='material-icons prefix'>textsms</i> */}
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type='text'
            //placeholder='Placeholder'
            id='autocomplete-input'
            className=''
          />
          <label className='' htmlFor='autocomplete-input'>
            New post
          </label>
          <button className=''>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
