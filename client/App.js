import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp/index';
import Profile from './components/Profile';
import Cart from './components/Cart/index';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct'



function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignIn} exact />
        <Route path="/signup" component={SignUp} exact />
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
