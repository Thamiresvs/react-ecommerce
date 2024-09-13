import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';
import CartPage from './Pages/CartPage';
import Checkout from './Components/Checkout';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './stripe';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/cart" exact component={CartPage} />
        <Route path="/checkout">
          <Elements stripe={stripePromise}>
            <Checkout />
          </Elements>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
