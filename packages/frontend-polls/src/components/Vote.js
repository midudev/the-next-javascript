/* eslint-disable react/prop-types */
import React from 'react'
import {EMOJI_VOTES} from '../constants'
export const VOTES = [0, 2, 4, 6, 8, 10]

export function Vote({isActive, onVote, vote}) {
  return (
    <button
      className={`js-Vote ${isActive ? 'is-active' : ''}`}
      onClick={onVote({vote})}
    >
      {EMOJI_VOTES[vote]}
    </button>
  )
}
