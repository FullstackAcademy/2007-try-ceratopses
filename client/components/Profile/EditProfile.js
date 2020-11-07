import React from 'react'

const EditProfile = ({firstName, lastName, email, admin, deleteUser, change, updateProfile}) =>{

    return (
      <div id="editUserPanel">
          <h2>Edit Account Information</h2>
          <form>
            <label htmlFor="firstName">First Name:</label>
            <input name="firstName" value={firstName} onChange={change}></input>
            <label htmlFor="lastName">Last Name:</label>
            <input name="lastName" value={lastName} onChange={change}></input>
            <label htmlFor="email">E-Mail:</label>
            <input name="email" value={email} onChange={change}></input>
          </form>
          <button>Reset Password</button>
          <button type='submit' onClick={updateProfile}>Save Changes</button>
          <button onClick={()=>deleteUser()}>Delete Account</button>
      </div>
    )
  }

export default EditProfile
