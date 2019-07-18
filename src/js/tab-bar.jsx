import React, { Component } from 'react'

import {TabLink} from './tab-link.jsx'
import * as C from './constants'

/**
 * renders component to allow switching between adding a new bottle and viewing bottle info
 */
export const TabBar = () => {
  return (
    <p>
      Show:
      {' '}
      <TabLink
        mode={C.LIST}
      >LIST</TabLink>
      {' '}
      <TabLink
        mode={C.EDIT}
      >ADD NEW</TabLink>
      {' '}
    </p>
  );
}