/* eslint-disable react/prop-types */

import React, {useState, useEffect} from 'react'

import {PROPOSALS} from '../constants'
import {Proposal} from './Proposal'
import {onGetVotesByUser} from '../firebase'

export function Proposals({user}) {
  const [votes, setVotes] = useState({})

  useEffect(() => {
    onGetVotesByUser({user}, setVotes)
  }, [])

  return PROPOSALS.map(proposal => (
    <Proposal
      key={proposal}
      proposal={proposal}
      user={user}
      vote={votes[proposal]}
    />
  ))
}
