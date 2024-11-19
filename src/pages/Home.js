import React from 'react';
import UserList from '../components/UserList';

const Home = ({ navigateToAddEdit }) => (
  <div>
    <h1>User Management</h1>
    <button onClick={() => navigateToAddEdit(null)}>Add User</button>
    <UserList onEdit={(user) => navigateToAddEdit(user)} />
  </div>
);

export default Home;
