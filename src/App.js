import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Profile from './components/Profile/Profile'
import Checkout from './components/Checkout/Checkout'
import Layout from './Layout'
import { Switch, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/Checkout" component={Checkout} />
        <Route exact path="/" component={Layout} />
      </Switch>

    </>
  )
}

export default App
