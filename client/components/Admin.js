import React from "react";
import {NavLink, Route} from 'react-router-dom'
import UserManagement from './UserManagement'

const Admin = () => {
return (
  <div>
    <nav id="adminNavBar">
    <NavLink to='/admin/users'>Users</NavLink>
    <NavLink to='#'>Orders</NavLink>
    <NavLink to='#'>Products</NavLink>
    </nav>
    <Route path='/admin/users' component = {UserManagement} />
  </div>
)

}

export default Admin
