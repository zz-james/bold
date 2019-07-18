import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addBottle} from './action-creators'
import * as C from './constants'


/**
 * renders form for adding bottles to the list
 * @param {dispatch} param0 
 */
let AddBottleWrapped = ({dispatch}) => {
  let input$name;
  let select$color;
  let textarea$detail;
  return (
  <div className="uk-card uk-card-default uk-width-xlarge">
    <div className="uk-card-header">
      Please enter the details of your wine
    </div>
    <div className="uk-card-body">
        <input className="uk-input" placeholder="Name" ref={node => {input$name = node;}} /> <br /> <br />
        Colour: <select ref={node => {select$color = node}} className="uk-select">
          <option value={C.RED}>red</option>
          <option value={C.WHITE}>white</option>
          <option value={C.OTHER}>other</option>
        </select><br /><br /> 
        <textarea className="uk-textarea" rows="5" placeholder="Details" ref={node => {textarea$detail = node;}} />
    </div>
    <div className="uk-card-footer">
        <button className="uk-button uk-button-primary" onClick={()=> {
            dispatch(addBottle(input$name.value, select$color.value, textarea$detail.value))
            input$name.value = '';
            select$color.value = '';
            textarea$detail.value = '';
          }
        }>
        Add Bottle
        </button>
        </div>
    </div>
  )
}





export const AddBottle = connect()(AddBottleWrapped);
