import React, { Component } from 'react'
import {connect} from 'react-redux'

import {setUiMode} from './action-creators'

const mapStateToProps = (state, ownProps) => ({
  active : ownProps.mode === state.uimode
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setUiMode(ownProps.mode))
  }
});

const Link = ({
  active,
  children,
  onClick
}) => {
  if( active ) {
    return <li className="uk-active"><a>{children}</a></li>
  }

  return (
    <li>
      <a href='#'
       onClick = { e=> {
         e.preventDefault();
         onClick();
       }}
    >{children}</a>
    </li>
  )
}

export const TabLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)