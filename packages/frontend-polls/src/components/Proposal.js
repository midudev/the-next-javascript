/* eslint-disable react/prop-types */

import React, {Component} from 'react'
import {Vote, VOTES} from './Vote'
import {db} from '../firebase'

export class Proposal extends Component {
  state = {
    votes: {}
  }

  _handleVote = ({vote}) => {
    return () => {
      const {proposal, user} = this.props
      const votesPath = `${proposal}_${user}`

      db.collection('votes')
        .doc(votesPath)
        .set({proposal, user, vote})
    }
  }

  render() {
    return (
      <div className="js-Proposal">
        <h3>{`proposal-${this.props.proposal}`}</h3>
        {VOTES.map(vote => (
          <Vote
            isActive={this.props.vote === vote}
            key={vote}
            onVote={this._handleVote}
            vote={vote}
          />
        ))}
      </div>
    )
  }
}
