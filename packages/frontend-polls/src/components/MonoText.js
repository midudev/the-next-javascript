/* eslint-disable react/prop-types */
import React from 'react'

export const MonoText = React.memo(({children}) => (
  <span className="js-MonoText">{children}</span>
))
