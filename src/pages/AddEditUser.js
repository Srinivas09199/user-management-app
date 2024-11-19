import React from 'react';
import UserForm from '../components/UserForm';

const AddEditUser = ({ user, onSave, navigateBack }) => (
  <div>
    <h1>{user ? 'Edit User' : 'Add User'}</h1>
    <UserForm
      initialData={user}
      onSubmit={(data) => {
        onSave(data);
        navigateBack();
      }}
      onCancel={navigateBack}
    />
  </div>
);

export default AddEditUser;
