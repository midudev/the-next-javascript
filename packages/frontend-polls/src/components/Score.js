import React from 'react'
import {EMOJI_VOTES} from '../constants'
const EMOJI_SCORES = Object.keys(EMOJI_VOTES)

const avg = a => a.reduce((a, b) => a + b, 0) / a.length
const round = num =>
  parseFloat((Math.round((num * 1000) / 10) / 100).toFixed(2))
export const Score = React.memo(({votes}) => {
  const score = avg(votes)

  const emojiScore = EMOJI_SCORES.reduce((prevValue, current, currentIndex) => {
    return +current > score ? prevValue : current
  }, EMOJI_SCORES[0])

  return (
    <div className="js-Score">
      <h2 className="js-Score-title">
        Number of Votes 🗳 <span className="js-Score-value">{votes.length}</span>
      </h2>
      <h2 className="js-Score-title">
        Hype Score 📈{' '}
        <span className="js-Score-value">
          {EMOJI_VOTES[emojiScore]} {round(score)} / 10
        </span>
      </h2>
    </div>
  )
})
