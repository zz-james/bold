import React, { Component } from 'react'

import {FilterLink} from './filter-link.jsx'
import * as C from './constants'


/**
 * renders links which can be used to filter
 */
export const Footer = () => {
  return (
    <p>
      Show:
      {' '}
      <FilterLink
        filter={C.SHOW_ALL}
      >ALL</FilterLink>
      {' '}
      <FilterLink
        filter={C.SHOW_RED}
      >RED</FilterLink>
      {' '}
      <FilterLink
        filter={C.SHOW_WHITE}
      >WHITE</FilterLink>
      {' '}
      <FilterLink
        filter={C.SHOW_OTHER}
      >OTHER</FilterLink>
    </p>
  );
}