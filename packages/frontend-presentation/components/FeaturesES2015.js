import React from 'react'
import styled from 'styled-components'
import {TagCloud} from 'react-tagcloud'

const Wrapper = styled.section`
  max-width: 60%;
  margin: 0 auto;
`

const data = [
  {value: 'const & let', count: 80},
  {value: 'Arrow functions', count: 100},
  {value: 'Function params default values', count: 60},
  {value: 'Template strings', count: 50},
  {value: 'Enhanced object literals', count: 33},
  {value: 'Promises', count: 70},
  {value: 'Generators & Iterators', count: 20},
  {value: 'for ... of', count: 10},
  {value: 'Symbol', count: 10},
  {value: 'Map/Set', count: 15},
  {value: 'Typed Arrays', count: 30},
  {value: 'Array#find', count: 30},
  {value: 'String#includes', count: 28},
  {value: 'Proxy', count: 5},
  {value: 'Destructuring', count: 55},
  {value: 'Classes', count: 60},
  {value: 'Modules: import/export', count: 20},
  {value: 'New Intl methods', count: 15}
]

export const FeaturesES2015 = () => (
  <Wrapper>
    <TagCloud
      colorOptions={{
        luminosity: 'dark',
        hue: 'red'
      }}
      minSize={12}
      maxSize={64}
      tags={data}
    />
  </Wrapper>
)
