import React, { Component } from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  record : state.bottles.filter( b => b.id === state.detail )[0] // there should be only one
})

const DetailsWrapped = ({record}) => {
  return (
    <div className="uk-card uk-card-default uk-width-xlarge">
        <div className="uk-card-header">
          {record.name}
        </div>
        <div className="uk-card-body">
            <p>{record.detail}</p>
        </div>
        <div className="uk-card-footer">
            <p href="#" className="uk-button uk-button-text">Colour: {record.colour}</p>
        </div>
    </div>
  )
}

export const Details = connect(
  mapStateToProps
)(DetailsWrapped)