import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp/index';
import CartContainer from './components/Cart/CartContainer';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Admin from './components/Admin';
import SignIn from './components/SignIn/index';
import Profile from './components/Profile';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  <Navbar toggle={toggle} />;
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
        <Route path="/categories/:category" component={Products} />
        <Route path="/profile" component={Profile} exact />
        <Route path="/cart/:id?" component={CartContainer} exact />
        <Route path="/admin" component={Admin} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
