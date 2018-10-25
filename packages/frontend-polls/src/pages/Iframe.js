/* eslint-disable react/prop-types */
import React, {useEffect, useState} from 'react'
import {Score} from '../components/Score'

import {onGetVotesByProposal} from '../firebase'

export const Iframe = ({match}) => {
  const [votes, setVotes] = useState([])
  const [isReady, setIsReady] = useState(false)
  const {params} = match
  const {proposal} = params

  useEffect(
    () => {
      onGetVotesByProposal({proposal}, votes => {
        setVotes(votes)
        setIsReady(true)
      })
    },
    [proposal]
  )

  return (
    <div className="js-IframePage">
      {!isReady && (
        <h2 className="js-IframePage-loading">Loading scores... 🐭</h2>
      )}
      {isReady && <Score votes={votes} />}
    </div>
  )
}
