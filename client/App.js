import React, { useState } from 'react';
import { connect } from 'react-redux';
// import { HashRouter as Router, Link, Route } from 'react-router-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import NavBar from './components/NavBar'
// import Footer from './components/Footer'
import Home from './pages';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import ProductsPage from './pages/products';
import CategoriesPage from './pages/categories';
import ProfilePage from './pages/profile';
import CartPage from './pages/cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
// import Categories from './components/Categories';
import CategoryProducts from './components/CategoryProducts';
import SingleProduct from './components/SingleProduct';

// class App extends React.Component {
//     constructor() {
//         super()
//     };

//     render() {
//         return (
//             <Router>
//                 <div id='home'>
//                     <NavBar />
//                     <Route path='/' exact component={ Categories } />
//                     <Route path='/categories/:category' exact component={ CategoryProducts }/>
//                     <Route path='/products/' exact component={ CategoryProducts }/>
//                     <Route path='/products/:productId' component = { SingleProduct }/>
//                     <Route path='/profile' exact />
//                     <Route path='/sign-in' exact />
//                     <Route path='/register' exact />
//                     <Footer />
//                 </div>

//             </Router>
//         )
//     };
// }

// export default connect(null)(App);

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
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
        <Route path="/products" component={ProductsPage} exact />
        <Route path="/products/:productId" component={SingleProduct} />
        <Route path="/categories" component={CategoriesPage} exact />
        <Route
          path="/categories/:category"
          exact
          component={CategoryProducts}
        />
        <Route path="/profile" component={ProfilePage} exact />
        <Route path="/cart" component={CartPage} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

// export default App;
export default connect(null)(App);
