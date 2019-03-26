// Dependencies
<<<<<<< HEAD
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { withRouter } from 'react-router'

import { connect } from 'react-redux'
import { setUser } from './actions'

import queryString from 'query-string'
import jwt_decode from 'jwt-decode'

import LandingPage from './components/landingPage/LandingPage'
import Login from './components/landingPage/login'
import Navigation from './components/sidenav/sidenav'
import Pricing from './components/pricing/Pricing'
import RSVP from './components/rsvp/rsvp'
import Billing from './components/pages/billing'

const row = {
  display: 'flex',
  flexDirection: 'row',
}
=======
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/landingPage/LandingPage";
import Login from "./components/landingPage/login/Login";
import Design from "./components/design/Design";
import WeddingPage1 from "./components/design/weddingPage1/WeddingPage1";
import WeddingPage2 from "./components/design/weddingPage2/WeddingPage2";
import WeddingPage3 from "./components/design/weddingPage3/WeddingPage3";
import Pricing from "./components/pricing/Pricing";
import RSVP from "./components/rsvp/RSVP";
import Billing from "./components/billing/Billing";
import Settings from "./components/settings/Settings";
import DashBoard from "./components/clientDashboard/Dashboard";
>>>>>>> origin/Frontend

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasToken: false,
      decodedToken: {},
    }
  }

  componentWillMount() {
    console.log('CWM')
    const jwt = localStorage.getItem('jwt')
    if (!jwt) {
      const query = queryString.parse(window.location.search)
      const token = query.token
      console.log('token from query', query.token)

      if (token) {
        let decoded = jwt_decode(token.toString())
        console.log('decoded token', decoded)
        this.props.setUser(decoded)
        localStorage.setItem('jwt', query.token)
        this.setState(
          {
            hasToken: true,
            decodedToken: decoded,
          },
          this.props.history.push('/')
        )
      }
    } else {
      let decoded = jwt_decode(jwt.toString())
      this.setState({
        hasToken: true,
        decodedToken: decoded,
      })
    }
  }

  render() {
    if (this.props.userInfo) {
      console.log('userInfo', this.props.userInfo)
      if (!this.props.userInfo.username) {
        // send user to account setup page
        return (
          <div>
            <h1>User Setup Page</h1>
          </div>
        )
      } else {
        return (
          <Router className='App'>
            <div style={row}>
              <Navigation />

              <Switch>
                <Route exact path='/' />
                {/* <Route exact path='/settings' component={Settings} /> */}
                <Route path='/pricing' component={Pricing} />
                <Route path='/billing' component={Billing} />
                <Route path='/rsvp' component={RSVP} />
              </Switch>
            </div>
          </Router>
        )
      }
    }

    return (
<<<<<<< HEAD
      // needs nav bar for going b/t landing page and login component
      <Router className='App'>
        <div>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            {/* login Should have singup first */}
            <Route path='/login' component={Login} />
          </Switch>
        </div>
      </Router>
    )
  }
}

// withRouter allows us to acces react-router props in the whole component
// used it to be able to do a history.push to remove the token from the url
const mapStateToProps = state => ({
  userInfo: state.userInfo,
})

export default withRouter(
  connect(
    mapStateToProps,
    { setUser }
  )(App)
)
=======
      <Router className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/login" component={Login} />
          <Route path="/design" component={Design} />
          <Route path="/design1" component={WeddingPage1} />
          <Route path="/design2" component={WeddingPage2} />
          <Route path="/design3" component={WeddingPage3} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/rsvp" component={RSVP} />
          <Route path="/billing" component={Billing} />
          <Route path="/settings" component={Settings} />
          <Route path="/dashboard" component={DashBoard} />
        </Switch>
      </Router>
    );
  }
}

export default App;
>>>>>>> origin/Frontend
