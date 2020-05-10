import React, { useState } from 'react';
import axios from 'axios';

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
      <h6>comment</h6>
      <form onSubmit={onSubmit} className='row'>
        <div className=' '>
          {/* <i className='material-icons prefix'>textsms</i> */}
          <input
            onChange={(e) => setContent(e.target.value)}
            value={content}
            type='text'
            //placeholder='Placeholder'
            id='autocomplete-input'
            className=''
          />
          <label className='' htmlFor='autocomplete-input'>
            New comment
          </label>
          <button className=''>Add comment</button>
        </div>
      </form>
    </div>
  );
};

export default CreateComment;
