import React from "react";
import Button from "./button";

const AddUser = ({
  firstname,
  setFirstname,
  lastname,
  setLastname,
  email,
  setEmail,
  profilepicture,
  setProfilepicture,
  editingIndex,
  submitUsers,
  updateUser,
  cancelEdit,
  shout
}) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card shadow-sm p-4">
            <h3 className="mb-4">Add New User</h3>
            <div className="mb-3 d-flex gap-2">
              <Button title="Stop" color="btn-danger" func={shout} />
              <Button title="Go" color="btn-success" />
              <Button title="Get ready" color="btn-warning" />
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control"
                placeholder="First Name" 
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)} 
              />
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control"
                placeholder="Last Name" 
                value={lastname}
                onChange={(e) => setLastname(e.target.value)} 
              />
            </div>
            <div className="mb-3">
              <input 
                type="email" 
                className="form-control"
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
              />
            </div>
            <div className="mb-3">
              <input 
                type="text" 
                className="form-control"
                placeholder="Profile Picture URL" 
                value={profilepicture}
                onChange={(e) => setProfilepicture(e.target.value)} 
              />
            </div>
            <button 
              className="btn btn-success w-100" 
              onClick={() => editingIndex !== null ? updateUser() : submitUsers()}
            >
              {editingIndex !== null ? "Update User" : "Submit"}
            </button>
            {editingIndex !== null && (
              <button 
                className="btn btn-secondary w-100 mt-2" 
                onClick={cancelEdit}
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
