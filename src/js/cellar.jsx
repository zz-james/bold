import React, { Component } from 'react'
import {connect} from 'react-redux'

import {AddBottle} from './add-bottle.jsx'
import {VisibleBottlesList} from './visible-bottle-list.jsx'
import {Details} from './details.jsx'
import {TabBar} from './tab-bar.jsx'
import * as C from './constants'

export const CellarAppWrapped = ({
  uimode
}) => (
  <div>
    <TabBar />

      {uimode == C.LIST ? (
        <VisibleBottlesList />
      ):null}
  
      {uimode == C.EDIT ? (
        <AddBottle />
      ):null}

      {uimode == C.DETAIL ? (
        <Details />
      ):null}

  </div>
)

const mapStateToProps = (state) => ({
  uimode : state.uimode,
  detail : state.detail
})

export const CellarApp = connect(
  mapStateToProps
)(CellarAppWrapped);