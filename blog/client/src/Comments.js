import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    //console.log(postId);
    try {
      const res = await axios.get(
        `http://localhost:4001/posts/${postId}/comments`
      );
      setComments(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = comments.map((comment) => (
    <div key={comment.id}>{comment.content}</div>
  ));

  return (
    <div className='px-4'>
      <p className='blue-text'>Comments:</p>
      {/* <pre>{JSON.stringify(comments, null, 2)}</pre> */}
      {renderedComments}
    </div>
  );
};

export default Comments;
