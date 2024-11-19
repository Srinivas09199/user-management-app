import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { addUser, updateUser, getUsers } from "../api/api";

const UserForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await getUsers();
          const user = response.data.find((u) => u.id.toString() === id);
          setFormData(user || {});
        } catch (err) {
          setError("Failed to fetch user details.");
        }
      };
      fetchUser();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await updateUser(id, formData);
      } else {
        await addUser(formData);
      }
      navigate("/");
    } catch (err) {
      setError("Failed to save user.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Edit User" : "Add User"}</h2>
      {error && <p className="text-danger">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Save
        </button>{" "}
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UserForm;
