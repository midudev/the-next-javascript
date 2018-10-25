import React, {Fragment, useEffect, useState} from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {onAuthStateChanged, signInAnonymously} from './firebase'

import {Home} from './pages/Home'
import {Iframe} from './pages/Iframe'
import {NotFound} from './pages/NotFound'

import './index.scss'

function App() {
  const [user, setUser] = useState(false)

  useEffect(() => {
    onAuthStateChanged(setUser)
    signInAnonymously()
  }, [])

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

ReactDOM.render(<App />, document.getElementById('root'))
