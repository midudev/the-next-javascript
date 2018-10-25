/* eslint-disable react/prop-types */

import React, {Component} from 'react'

import {PROPOSALS} from '../constants'
import {Proposal} from './Proposal'
import {db} from '../firebase'

export class Proposals extends Component {
  state = {votes: {}}

  componentDidMount() {
    db.collection('votes')
      .where('user', '==', this.props.user)
      .onSnapshot(querySnapshot => {
        let votes = {}
        if (querySnapshot.docs.length > 0) {
          querySnapshot.forEach(function(doc) {
            const {proposal, vote} = doc.data()
            votes[proposal] = vote
          })
        }
        this.setState({votes})
      })
  }

  render() {
    const {user} = this.props
    const {votes} = this.state

    return PROPOSALS.map(proposal => (
      <Proposal
        key={proposal}
        proposal={proposal}
        user={user}
        vote={votes[proposal]}
      />
    ))
  }
}
