/* eslint-disable react/prop-types */

import React from 'react'
import AtomSpinner, {AtomSpinnerTypes} from '@s-ui/react-atom-spinner'

import {Proposals} from '../components/Proposals'
import {Header} from '../components/Header'

export const Home = React.memo(function({user}) {
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
})
