import React from "react";
import {NavLink, Route, Redirect} from 'react-router-dom'
import UserManagement from './UserManagement'
import axios from 'axios'

class Admin extends React.Component{
constructor(){
  super();
  this.state =  {status: 0}
}

async componentDidMount(){
try {
  const {status} = await axios.get('/api/admin')
      this.setState({status:status})
} catch (error) {
  /*if the user fails authorization, the server will return 401, which kicks it over to the catch block. So if the axios call fails for any reason then that means it wasn't able to confirm that the user is authorized, so don't give them access to admin functions.*/
  this.setState({status:401})
}
}

//render nothing until we receive a status from the server, then either render the subcomponents or redirect back to home
 render(){
  if(this.state.status===0){
    return null
  } else if(this.state.status===200){
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
  } else return <Redirect to ="/" />
}
}

export default Admin
