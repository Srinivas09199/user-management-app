import React from 'react';

const UserCard = ({ user, onEdit, onDelete }) => (
  <div className="user-card">
    <h4>{user.name}</h4>
    <p>Email: {user.email}</p>
    <p>Department: {user.department}</p>
    <button onClick={onEdit}>Edit</button>
    <button onClick={onDelete}>Delete</button>
  </div>
);

export default UserCard;
