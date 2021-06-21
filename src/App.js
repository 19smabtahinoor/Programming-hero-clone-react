import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Dashboard from './components/Dashboard/Dashboard'
import Profile from './components/Profile/Profile'
import Checkout from './components/Checkout/Checkout'
import Layout from './Layout'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { Switch, Route } from 'react-router-dom'
import { css } from "@emotion/react";

const override = css`
  display: flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  min-height:100vh;
  margin: 0 auto;
`;
function App() {
  const [loading,setLoading] = useState(false)

  useEffect( () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },4000)
  },[])
  return (
    <>
      <Header />

      { loading ? 
        <ClimbingBoxLoader color={'#6129ED'} loading={loading} size={20} css={override}/>
       : 
        <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/Checkout" component={Checkout} />
        <Route exact path="/" component={Layout} />
      </Switch>
      }


    </>
  )
}

export default App;
