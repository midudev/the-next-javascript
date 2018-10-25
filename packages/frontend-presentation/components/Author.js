import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 128px;
`

const Avatar = styled.img`
  height: 80px;
  margin-right: 16px;
  width: 80;
`

const Text = styled.p`
  margin: 4px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
`

const Link = styled.a`
  background-color: #e4c425;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  color: #24292e;
  text-decoration: none;
`

export const Author = () => (
  <Wrapper>
    <Avatar src="../assets/me.png" />
    <div>
      <Text>Miguel Ángel Durán</Text>
      <Text>
        <i>Frontend Engineer at Schibsted Spain</i>
      </Text>
      <Text>
        <Link href="https://twitter.com/midudev?lang=es">@midudev</Link>
      </Text>
    </div>
  </Wrapper>
)
