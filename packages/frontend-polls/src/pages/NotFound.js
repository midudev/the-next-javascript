import React from 'react'
import {MonoText} from '../components/MonoText'

export const NotFound = () => (
  <div className="js-NotFoundPage">
    <h1>404 Rat!</h1>
    <img
      className="js-NotFoundPage-image"
      src="https://i.imgur.com/SETLt8I.gif"
    />
    <MonoText>oh jezz! This rat ate the page you were looking!</MonoText>
  </div>
)
