import React, { useState } from 'react';

import axios from 'axios';

const PostsList = () => {
  const [users, setUsers] = useState({});

  const getUsers = async () => {
    try {
      const users = await axios.get('http://localhost:4000/posts');
      //return users;
      setUsers(users);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Posts list</h2>
      <pre>{JSON.stringify(users.data, null, 2)}</pre>
      <button onClick={getUsers}>Get users</button>
    </div>
  );
};

export default PostsList;
