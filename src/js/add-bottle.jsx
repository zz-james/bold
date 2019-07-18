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
    <div>
      <input ref={node => {input$name = node;}} /> <br />
      <select ref={node => {select$color = node}} >
        <option value={C.RED}>red</option>
        <option value={C.WHITE}>white</option>
        <option value={C.OTHER}>other</option>
      </select><br />
      <textarea ref={node => {textarea$detail = node;}} />

      <button onClick={()=> {
          dispatch(addBottle(input$name.value, select$color.value, textarea$detail.value))
          input$name.value = '';
          select$color.value = '';
          textarea$detail.value = '';
        }
      }>
      Add Bottle
      </button>
    </div>
  )
}

export const AddBottle = connect()(AddBottleWrapped);
