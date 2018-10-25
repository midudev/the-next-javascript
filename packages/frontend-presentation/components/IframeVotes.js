/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'

const Iframe = styled.iframe`
  border: 0;
  margin: 0;
  padding: 0;
  width: 100%;
`
export const IframeVotes = ({proposal}) => (
  <Iframe src={`http://localhost:3000/iframe/${proposal}`} />
)
