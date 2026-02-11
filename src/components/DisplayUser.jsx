import React from "react";

const DisplayUser = ({ allUsers, startEdit, deleteUsers, showModal, firstname, setFirstname, lastname, setLastname, email, setEmail, profilepicture, setProfilepicture, updateUser, setShowModal }) => {
  return (
    <>
      <div className="container">
        <h3 className="mb-4">Users List</h3>
        <div className="row">
          {
            allUsers.map((user, index) => {
              return (
                <div key={index} className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <div className="card-body text-center">
                      <img src={user.profilepicture} alt="Profile" className="rounded-circle mb-3" width="100" height="100" />
                      <h5 className="card-title">{user.firstname} {user.lastname}</h5>
                      <p className="card-text text-muted">{user.email}</p>
                    </div>
                    <div className="card-footer bg-white border-top">
                      <button 
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => startEdit(index)}
                      >
                        Edit
                      </button>
                      <button 
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteUsers(index)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>

      {showModal && (
        <div className="modal fade show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}} tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">Edit User</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">First Name</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)} 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Last Name</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)} 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Profile Picture URL</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={profilepicture}
                    onChange={(e) => setProfilepicture(e.target.value)} 
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button 
                  type="button" 
                  className="btn btn-secondary" 
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary" 
                  onClick={updateUser}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayUser;
