import React, {Component, Fragment} from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {firebase} from './firebase'

import {Home} from './pages/Home'
import {Iframe} from './pages/Iframe'
import {NotFound} from './pages/NotFound'

import './index.scss'

class App extends Component {
  state = {user: undefined}

  componentDidMount() {
    firebase.auth().onAuthStateChanged(userObject => {
      if (userObject) {
        const user = userObject.uid
        this.setState({user})
      } else {
        this.setState({user: undefined})
      }
    })

    firebase.auth().signInAnonymously()
  }

  render() {
    const {user} = this.state

    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home {...props} user={user} />}
            />
            <Route path="/iframe/:proposal" component={Iframe} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
