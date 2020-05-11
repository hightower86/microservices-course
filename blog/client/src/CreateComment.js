import React, { useState } from 'react';
import axios from 'axios';

import commentStyle from './CreateComment.module.css';

const CreateComment = ({ postId }) => {
  //console.log(postId);
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    if (!content) {
      alert('Публикация должна содержать хотя бы один символ');
      return;
    }
    setContent('');
  };

  return (
    <div className=''>
      <form onSubmit={onSubmit} className='form'>
        {/* <i className='material-icons prefix'>textsms</i> */}
        <input
          onChange={(e) => setContent(e.target.value)}
          value={content}
          type='text'
          placeholder='текс комментария'
          id='autocomplete-input'
          className=''
        />

        <button className=''>Add comment</button>
      </form>
    </div>
  );
};

export default CreateComment;
