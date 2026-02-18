// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <div className="app-root">
//       <header>
//         <div className="logo">
//           <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//             <path d="M16 0L0 16L16 32L32 16L16 0Z" fill="#03363D" />
//           </svg>
//           <span>zendesk</span>
//         </div>
//         <div className="header-buttons">
//           <button className="btn btn-primary">Try for free</button>
//           <button className="btn btn-secondary">View demo</button>
//         </div>
//       </header>

//       <main>
//         <div className="login-container">
//           <h1>Sign in to Zendesk</h1>

//           <form onSubmit={(e) => e.preventDefault()}>
//             <div className="form-group">
//               <label>yoursubdomain.zendesk.com</label>
//               <div className="input-wrapper">
//                 <input type="text" placeholder="" />
//                 <span className="domain-badge">.zendesk.com</span>
//               </div>
//               <a href="#" className="forgot-link">Forgot your subdomain?</a>
//             </div>

//             <button type="button" className="btn-signin">Sign in</button>
//             <button type="button" className="btn-trial">New here? Start free trial</button>
//           </form>
//         </div>
//       </main>

//       <button className="chat-button" aria-label="Chat">
//         <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path d="M12 2C6.48 2 2 6.48 2 12C2 13.93 2.6 15.72 3.63 17.2L2.05 21.95L7.07 20.42C8.47 21.24 10.18 21.73 12 21.73C17.52 21.73 22 17.25 22 11.73C22 6.21 17.52 2 12 2Z" />
//         </svg>
//       </button>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";
// import "./App.css";
// import AddUser from "./components/AddUser";
// import DisplayUser from "./components/DisplayUser";

// const App = () => {
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [profilepicture, setProfilepicture] = useState("");
//   const [allUsers, setallUsers] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const submitUsers = () => {
//     let user = {
//       firstname,
//       lastname,
//       email,
//       profilepicture
//     };
//     console.log(user);
//     let newAllusers = [...allUsers, user];
//     setallUsers(newAllusers);
//     setFirstname("");
//     setLastname("");
//     setEmail("");
//     setProfilepicture("");
//   };

//   const deleteUsers = (index) => {
//     let newallUsers = [...allUsers];
//     newallUsers.splice(index, 1);
//     setallUsers(newallUsers);
//   };

//   const startEdit = (index) => {
//     const user = allUsers[index];
//     setFirstname(user.firstname);
//     setLastname(user.lastname);
//     setEmail(user.email);
//     setProfilepicture(user.profilepicture);
//     setEditingIndex(index);
//     setShowModal(true);
//   };

//   const updateUser = () => {
//     let updatedUsers = [...allUsers];
//     updatedUsers[editingIndex] = {
//       firstname,
//       lastname,
//       email,
//       profilepicture
//     };
//     setallUsers(updatedUsers);
//     setFirstname("");
//     setLastname("");
//     setEmail("");
//     setProfilepicture("");
//     setEditingIndex(null);
//     setShowModal(false);
//   };

//   const cancelEdit = () => {
//     setFirstname("");
//     setLastname("");
//     setEmail("");
//     setProfilepicture("");
//     setEditingIndex(null);
//   };


//   const shout=(name)=>{
//     alert(`shoutingggggg!!!!!${name}`)
//   }


//   return (
//     <div className="app-root">
//       <AddUser 
//         firstname={firstname}
//         setFirstname={setFirstname}
//         lastname={lastname}
//         setLastname={setLastname}
//         email={email}
//         setEmail={setEmail}
//         profilepicture={profilepicture}
//         setProfilepicture={setProfilepicture}
//         editingIndex={editingIndex}
//         submitUsers={submitUsers}
//         updateUser={updateUser}
//         cancelEdit={cancelEdit}
//         shout={shout}
//       />
//       <DisplayUser 
//         allUsers={allUsers}
//         startEdit={startEdit}
//         deleteUsers={deleteUsers}
//         showModal={showModal}
//         firstname={firstname}
//         setFirstname={setFirstname}
//         lastname={lastname}
//         setLastname={setLastname}
//         email={email}
//         setEmail={setEmail}
//         profilepicture={profilepicture}
//         setProfilepicture={setProfilepicture}
//         updateUser={updateUser}
//         setShowModal={setShowModal}
//       />
//     </div>
//   );
// };

// export default App;



import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Profile from './pages/Profile'
import Fetch from './pages/Fetch'
import Search from './pages/search' 
import Formikk from './pages/Formikk'


const App = () => {
  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contacts" element={<Contacts/>} />
        <Route path="/search" element={<Search/>} />
        <Route path="/formikk" element={<Formikk/>} />

        {/*wildcard routing*/}
        <Route path="*" element={<NotFound/>} />
        {/*programmatic routing*/}


        <Route path= "/sp-contacts" element={ <Navigate to ={'/contacts'}/>} />
    {/*dynamic routing       assignment-nested/children route */}

       <Route path='/profile/:username' element={<Profile/>} />

       <Route path='/fetch' element={<Fetch/>} />
 


      </Routes>

    </>
  )
}

export default App