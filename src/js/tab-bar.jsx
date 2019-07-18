import React, { Component } from 'react'

import {TabLink} from './tab-link.jsx'
import * as C from './constants'

/**
 * renders component to allow switching between adding a new bottle and viewing bottle info
 */
export const TabBar = () => {
  return (
    <nav className="uk-navbar-container uk-navbar uk-navbar-transparent" role="navigation" aria-label="main navigation">
      <ul className="uk-tab">

      <TabLink
        mode={C.LIST}
      >ALL WINES</TabLink>

      <TabLink
        mode={C.EDIT}
      >ADD NEW</TabLink>

      </ul>
    </nav>
  );
}