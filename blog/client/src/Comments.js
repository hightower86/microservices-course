import React from 'react';

const Comments = ({ comments }) => {
  const renderedComments = comments.map((comment) => (
    <div key={comment.id}>{comment.content}</div>
  ));

  return (
    <div className=''>
      <p className=''>Comments:</p>
      {/* <pre>{JSON.stringify(comments, null, 2)}</pre> */}
      {renderedComments}
    </div>
  );
};

export default Comments;
