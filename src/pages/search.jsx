import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("q") || "";
  
  const [users, setUsers] = useState([]);        // original data
  const [filteredUsers, setFilteredUsers] = useState([]); // filtered result
  const [searchTerm, setSearchTerm] = useState(queryParam);
  const [role, setRole] = useState("all");

 
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setFilteredUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);


  useEffect(() => {
    setSearchTerm(queryParam);
  }, [queryParam]);


  useEffect(() => {
    let filtered = users.filter((user) => {
      const searchLower = searchTerm.toLowerCase();
      
      // Search across multiple fields
      const matchesSearch = 
        user.name.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower) ||
        user.username.toLowerCase().includes(searchLower) ||
        user.phone.toLowerCase().includes(searchLower) ||
        (user.company && user.company.name.toLowerCase().includes(searchLower));

      // example fake role filter (since jsonplaceholder has no roles)
      const matchesRole =
        role === "all" || user.username.toLowerCase().includes(role);

      return matchesSearch && matchesRole;
    });

    setFilteredUsers(filtered);
  }, [searchTerm, role, users]);

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Search Users</h3>

      {/* SEARCH INPUT */}
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search by name, email, username, phone, or company..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        autoFocus
      />

      
      <select
        className="form-select mb-4"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="all">All Users</option>
        <option value="company">Company</option>
        <option value="phone">Phone</option>
        <option value="address">Address</option>
      </select>

     
      {filteredUsers.length > 0 ? (
        <div className='d-flex flex-wrap gap-3'>
          {filteredUsers.map((user) => (
            <div key={user.id} className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title"><strong>Name:</strong> {user.name}</h5>
                <p className="card-text"><strong>Email:</strong> {user.email}</p>
                <p className='card-text'><strong>Username:</strong> {user.username}</p>
                <p className='card-text'><strong>Phone:</strong> {user.phone}</p>
                <p className='card-text'><strong>Website:</strong> {user.website}</p>
                <p className='card-text'><strong>Company:</strong> {user.company.name}</p>
                <p className='card-text'><strong>Address:</strong> {user.address.street + ' ' + user.address.suite + ' ' + user.address.city + ' '+ user.address.zipcode}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-danger">No users found</p>
      )}
    </div>
  );
}

export default Search;
