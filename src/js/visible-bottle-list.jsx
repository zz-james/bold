import React, { Component } from 'react'
import {connect} from 'react-redux'

import {showDetail, setUiMode} from './action-creators'
import * as C from './constants';

/**
 * filters the bottle list by colour
 * @param {array} bottles 
 * @param {string} filter 
 */
const getVisibleBottles = (
  bottles,
  filter
) => {
  switch (filter) {
    case C.SHOW_ALL:
      return bottles;
    case C.SHOW_RED:
      return bottles.filter( b => b.colour === C.RED );
    case C.SHOW_WHITE:
      return bottles.filter( b => b.colour === C.WHITE );
    case C.SHOW_OTHER:
      return bottles.filter( b => !(b.colour === C.RED || b.colour === C.WHITE) );

  }
}

/**
 * renders the individual bottle list entry
 * @param {props} param0 
 */
const Bottle = ({
  onClick,
  id,
  name, 
  colour,
  detail
}) => (
  <li onClick={onClick}>
    {name}
  </li> 
)


/**
 * renders the list of bottles
 * @param {props} param0 
 */
const BottleList = ({
  bottles,
  onBottleClick
}) => (
  <div>
    <p>Click the bottle to see details</p>
    <ul>
      {bottles.map(bottle => 
        <Bottle key={bottle.id} {...bottle} onClick={()=>onBottleClick(bottle.id)}/>
      )}
    </ul>
  </div>
)



const mapStateToProps = (state) => ({
  bottles : getVisibleBottles(state.bottles, state.visibilityFilter),
})

const mapDispatchToProps = (dispatch) => ({
  onBottleClick(id) {
    dispatch(setUiMode(C.DETAIL));
    dispatch(showDetail(id))
  }
})

export const VisibleBottlesList = connect(
  mapStateToProps, mapDispatchToProps
)(BottleList);