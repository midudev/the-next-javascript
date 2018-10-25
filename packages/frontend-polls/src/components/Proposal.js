/* eslint-disable react/prop-types */

import React from 'react'
import {Vote, VOTES} from './Vote'
import {setVote} from '../firebase'

export function Proposal({proposal, user, vote}) {
  function _handleVote({vote}) {
    return () => setVote({proposal, vote, user})
  }

  return (
    <div className="js-Proposal">
      <h3>{`proposal-${proposal}`}</h3>
      {VOTES.map(voteConstant => (
        <Vote
          isActive={vote === voteConstant}
          key={voteConstant}
          onVote={_handleVote}
          vote={voteConstant}
        />
      ))}
    </div>
  )
}
