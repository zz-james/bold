import React, { Component } from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  record : state.bottles.filter( b => b.id === state.detail )[0] // there should be only one
})

const DetailsWrapped = ({record}) => {
  return (
    <div>
      <p>{record.name}</p>
      <p>{record.colour}</p>
      <p>{record.detail}</p>
    </div>
  )
}

export const Details = connect(
  mapStateToProps
)(DetailsWrapped)