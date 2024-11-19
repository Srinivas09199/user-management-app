import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getUsers, deleteUser } from "../api/api";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUsers();
        setUsers(response.data);
      } catch (err) {
        setError("Failed to fetch users.");
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (err) {
      setError("Failed to delete user.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>User List</h2>
      {error && <p className="text-danger">{error}</p>}
      <Button className="mb-3" onClick={() => navigate("/add")}>
        Add User
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name.split(" ")[0]}</td>
              <td>{user.name.split(" ")[1] || "-"}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  variant="warning"
                  onClick={() => navigate(`/edit/${user.id}`)}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserList;
