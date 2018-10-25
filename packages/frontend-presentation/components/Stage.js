/* eslint-disable react/prop-types */
import React from 'react'

const DEFAULT_STAGE = '🐀 No Stage'
const STAGES = {
  0: '💡 Stage 0: Strawman',
  1: '🤔 Stage 1: Proposal',
  2: '📝 Stage 2: Draft',
  3: '👩🏽‍💼 Stage 3: Candidate',
  4: '🤩 Stage 4: Finished'
}

export const Stage = ({stage}) => (
  <React.Fragment>{STAGES[stage] || DEFAULT_STAGE}</React.Fragment>
)
