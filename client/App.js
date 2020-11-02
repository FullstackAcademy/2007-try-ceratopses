import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp/index';
import Cart from './components/Cart/index';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct'
import SignIn from './components/SignIn'
import Profile from './components/Profile'



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

//   <Navbar toggle={toggle} />
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar></Navbar>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signIn" component={SignIn} exact />
        <Route path="/signUp" component={SignUp} exact />
        <Route path="/products" component={Products} exact />
        <Route path="/products/:productId" component={SingleProduct} />
        <Route path="/profile" component={Profile} exact />
        <Route path="/cart" component={Cart} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App
