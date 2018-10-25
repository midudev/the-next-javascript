/* eslint-disable react/prop-types */

import React, {Component} from 'react'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'

import {Proposals} from '../components/Proposals'
import {Header} from '../components/Header'

export class Home extends Component {
  render() {
    const {user} = this.props
    return (
      <section className="js-HomePage">
        <Header />
        {user && <Proposals user={user} />}
        {!user && (
          <div className="js-HomePage-loading">
            <AtomSpinner type={AtomSpinnerTypes.FULL} />
          </div>
        )}
      </section>
    )
  }
}
