/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'

import {Stage} from './Stage'

const Block = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const Title = styled.h2`
  margin: 0;
`

const SubTitle = styled.h4`
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  color: #333;
  font-weight: 400;
  margin: 0 0 -16px 16px;
  padding: 0 8px;
`

export const ProposalTitle = ({title, stage}) => (
  <Block>
    <Title>{`proposal-${title}`}</Title>
    <SubTitle>
      <Stage stage={stage} />
    </SubTitle>
  </Block>
)
