
import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Redirect } from 'react-router'
import "./App.css"
import Login from './Main/Login'
import Home from './Main/Home'
import Mbook from './Main/Mbook'
import Gfr from './Main/Gfr'
import Offers from './Main/Offers'
import Nav from './Main/Nav'
import Page from './Main/Page'
import Bus from './Body/Bus'
import Trains from './Body/Trains'
import Hotels from './Body/Hotels'
import Body from './Body/Body'
import Buslist from './Body/Buslist'





export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route path="/Login" component={Login} />
            <Route path="/Offers" component={Offers} />
            <Route path="/Gfr" component={Gfr} />
            <Route path="/Mbook" component={Mbook} />
            <Route path="/Body" component={Body} />
            <Route path="/Bus" component={Bus} />
            <Route path="/Trains" component={Trains} />
            <Route path="/Hotels" component={Hotels} />
            <Route path="/bus-search/:source/:destination" component={Buslist} />
            <Route path="/Buslist" component={Buslist} />
            <Route path="/Home" component={Home} />
            <Route path="/404" component={Page} />
            <Redirect to="/404" />
          </Switch>
        </Router>
      </>


    )
  }
}
