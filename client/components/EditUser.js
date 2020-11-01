import React from 'react'

const EditUser = ({firstName, lastName, email, admin, deleteUser, change, updateProfile}) =>{

    return (
      <div id="editUserPanel">
          <h2>Edit User {firstName} {lastName}</h2>
          <form>
            <label htmlFor="firstName">First Name:</label>
            <input name="firstName" value={firstName} onChange={change}></input>
            <label htmlFor="lastName">Last Name:</label>
            <input name="lastName" value={lastName} onChange={change}></input>
            <label htmlFor="email">E-Mail:</label>
            <input name="email" value={email} onChange={change}></input>
            <label htmlFor="admin">Grant Admin Rights?</label>
            <select name="admin" value={admin} onChange={change}>
              <option name="true">Yes</option>
              <option name="false">No</option>
            </select>
          </form>
          <button>Reset Password</button>
          <button type='submit' onClick={updateProfile}>Save Changes</button>
          <button onClick={()=>deleteUser()}>Delete User</button>


      </div>
    )
  }


export default EditUser
